const fs = require('fs');
const path = require('path');
const { Web3 } = require('web3');
const web3 = new Web3('http://localhost:8545');

const contractName = 'PatientProfile';

const contractJsonPath = path.join(__dirname, '../../build/contracts', `${contractName}.json`);

const contractJson = JSON.parse(fs.readFileSync(contractJsonPath, 'utf8'));

const networkId = Object.keys(contractJson.networks)[0];
console.log(networkId);
const CONTRACT_ADDRESS = contractJson.networks[networkId].address;
console.log(CONTRACT_ADDRESS);

const CONTRACT_ABI = contractJson.abi

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

module.exports = { contract, web3 };