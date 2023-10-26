// middleware to check if the user is authenticated using jwt

const jwt = require('jsonwebtoken');

const auth_patient = (req, res, next) => {
    try {
        // get the token from the header
        const token = req.headers.authorization.split(' ')[1];

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.patientAddress = decodedToken.patientAddress;

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: "Authentication failed" });
    }
}

module.exports = auth_patient;