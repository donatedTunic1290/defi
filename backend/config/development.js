'use strict';

// Global
var path = require('path');
var config = {}
var projectDirectory = path.resolve(__dirname, "..")
var smartContractDirectory = path.resolve(__dirname, "../../smart-contract-hardhat")

// Enviornment
config.env = 'development'

/******************** Express Server config *************************/
config.server = {}
config.server.host = '0.0.0.0'
config.server.port = 5001
/******************** Express Server config *************************/

/******************** Blockchain *************************/
config.blockchain = {}
config.blockchain.url = "http://127.0.0.1:8545"
config.blockchain.chainId = "5777"
/******************** Blockchain *************************/

/******************** Smart Contract *************************/
config.smartContract = {}
config.smartContract.upgradToken = {}
config.smartContract.upgradToken.address = "0x54a716fBBA0057A09acEB90f7AD2624Dc58f7113"
config.smartContract.upgradToken.gasLimit = 100000
config.smartContract.upgradToken.buildPath = smartContractDirectory + "/artifacts/contracts/1_UpgradTokenContract.sol/UpgradToken.json"
config.smartContract.defiplatform = {}
config.smartContract.defiplatform.address = "0xC65A4AAC3a8D49E824118e2955590A507d58cFF3"
config.smartContract.defiplatform.gasLimit = 6000000
config.smartContract.defiplatform.buildPath = smartContractDirectory + "/artifacts/contracts/3_DefiPlatformContract.sol/DefiPlatform.json"
/******************** Smart Contract *************************/

/******************** Wallet *************************/
config.wallet = {}
/******************** Wallet *************************/

/**********************Logging***********************/
config.logs = {}
config.logs.consoleLogs = true
config.logs.fileLogs = false
config.logs.api = {}
config.logs.api.path = "/var/log/defi/"
config.logs.api.category = "API"
/**********************Logging***********************/

module.exports = config;
