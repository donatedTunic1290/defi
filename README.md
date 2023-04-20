
# P2P-Lending

## About The Project

A decentralized, smart contract based platform for p2p-lending of any existing ERC20 Token on the Ethereum Blockchain with ETH as colletral.
The open ecosystem of the p2p-lending platform has the potential to offer cheaper lending contracts than traditional centralized institutions, while also enabling people all over the world to profit from a fair and transparent portfolio of products.

## Built With

- [Node 16](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/getting-started/)
- [Ganache](https://www.trufflesuite.com/ganache)
- [ethers.js](https://docs.ethers.io/v5/)
- [Waffle](https://getwaffle.io/)
- [web3.js](https://web3js.readthedocs.io/en/1.0/getting-started.html)

## Prerequisites

These are the requisites you need, in order to use the software and instructions, on how to install them.

### NodeJS and NPM

```sh
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs
```
### Ganache

Download it form this link https://truffleframework.com/ganache
### Hardhat

```sh
npm install --save-dev hardhat
```

## Installation

### Clone the repo

```sh
git clone <Current_URL>
```

### Run Ganache on port 8545

```sh
Ganache -> Settings -> Server -> Port Number -> 8545
```

### Go to smart-contract-hardhat folder and Install dependencies

```sh
npm install
```

### Compile Smart Contracts

```sh
hh compile
```

### Deploy Smart Contracts to Hardhat Network

```sh
hh run scripts/deploy.ts
```

### Run Test Cases

### Run Test

```sh
hh test
```

## Backend

### Update Smart Contract address in config/development.js (get this from console output)

config.smartContractAddress.p2pToken

config.smartContractAddress.p2pPlatform

### Go to backend folder and Install dependencies

```sh
sudo npm install
```

### Create Log folder

```
sudo mkdir -p /var/log/defi/
sudo chmod 777 -R /var/log/defi
```

### Start backend

```sh
npm run start
```

### Point to Testnets

Change below configuration in config/development.js

config.blockchain.url = {INFURA_URL}
config.blockchain.chainId = {CHAIN_ID} (Ropsten - 3) 

## API Document

https://documenter.getpostman.com/view/1998368/2s93Y3uL7A

## Deploying the Smart contract (Manually)

1. UpgradToken.sol
3. Governance.sol
4. DeFiPlatform.sol

## Understand the Smart contract

1. Create Ask Request with collateral as ETH
2. Get created requests from API -> get Requests
3. Give Token approval from Lender to above address (same amount as asked)
4. Call Lend Function from Lender
5. Transfer some extra token to asker so that he can payback
6. Payback from lender, Collateral will come back
7. Collect Collateral if not paid before deadline
8. Cancel Request before Lender pay
9. Change is Valid from upVote from Governance Contract

# Deploy on Ropsten Network

*HINT (Session 2)* Deploy contract on ethereum ropsten network 

1. Set your Infura Key(https://infura.io/) and Mnemonic as below (Use your existing seed or create new and transfer some ether to it)
2. Update "from" address in truffle-config.js which have funds

```sh
export INFURA_API_KEY="asdasd"
export MNEMONIC="asd asd ...."
```

# Services

## Block Crawler (Sample)

To capture all blockchain transaction

```sh
cd backend
node script/blockCrawler.js
```

# Understand the Defi app architecture

1. Smart contract creation
2. Smart contract deployment (Hardhat)
3. Get the JSON artifacts (ABI files)
4. Create your blockchain connection (web3)
5. Create your smart contract object (contractObj -> ABI and Smart Contract Address)
6. Interact with the contract
	1. Read : .call() 
	2. Write : RawTransaction(APP work -> FE/BE) -> SignedTransaction(Wallet like metamask) -> Broadcast(Wallet like metamask)

# Troubleshoot

## Failed at the scrypt@6.0.3 install script.

```sh
sudo npm install github:barrysteyn/node-scrypt#fb60a8d3c158fe115a624b5ffa7480f3a24b03fb
OR
sudo npm i web3
```

## Invalid Sender Error on Ropsten network in API

https://github.com/ChainSafe/web3.js/issues/2915

```sh
sudo npm i ethereumjs-tx@1.3.7
```
