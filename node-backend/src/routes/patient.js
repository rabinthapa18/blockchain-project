const express = require('express');
const router = express.Router();
const { hashPassword } = require('../controllers/hash');
const { contract, web3 } = require('../controllers/contract');
const jwt = require('jsonwebtoken');

const patientAuth = require('../middleware/patient_auth');

router.post('/createProfile', async (req, res) => {
    try {
        console.log(req.body);
        const { name, age, phoneNumber, email, password, patientAddress } = req.body;

        const passwordHash = hashPassword(password, email);

        const gasEstimate = await contract.methods.setProfile(name, age, phoneNumber, email, passwordHash).estimateGas({ from: patientAddress });

        const gasPrice = await web3.eth.getGasPrice();

        const result = await contract.methods.setProfile(name, age, phoneNumber, email, passwordHash).send({ from: patientAddress, gas: gasEstimate, gasPrice: gasPrice });

        res.json({ success: true, transactionHash: result.transactionHash });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
});


router.post('/login', async (req, res) => {
    try {
        const { email, password, patientAddress } = req.body;
        console.log(req.body);

        const result = await contract.methods.getProfile(patientAddress).call();

        const profile = {
            email: result[3],
            passwordHash: result[4]
        };

        console.log(profile);
        // Verify email and password
        const hashedPassword = hashPassword(password, email);
        console.log(hashedPassword === profile.passwordHash);
        console.log(email === profile.email);
        if (hashedPassword !== profile.passwordHash || email !== profile.email) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        console.log(process.env.JWT_SECRET)

        // create JWT
        const token = jwt.sign({ patientAddress }, process.env.JWT_SECRET);

        res.json({ success: true, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get('/getProfile', patientAuth, async (req, res) => {
    try {
        const { patientAddress } = req;

        const result = await contract.methods.getProfile(patientAddress).call();

        if (!result) {
            return res.status(404).json({ success: false, message: "Profile not found" });
        }

        const profile = {
            name: result[0],
            age: parseInt(result[1]),
            phoneNumber: result[2],
            email: result[3],
            passwordHash: result[4]
        };

        res.json({ success: true, profile });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
}
);


module.exports = router;