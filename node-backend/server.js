const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = 3000;

const patientRoutes = require('./src/routes/patient');

app.use(bodyParser.json());
app.use(cors());

app.use('/patient', patientRoutes);


app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
