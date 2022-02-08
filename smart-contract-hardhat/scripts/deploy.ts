// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import {ethers, upgrades} from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  
  const tokenSupply = 10000000;
  const tokenName = "GradCoin";
  const tokenDecimals = 0;
  const tokenSymbol = "GRAD";
  
  // 1. Deploy Upgrad Token
  const UpgradToken = await ethers.getContractFactory("UpgradToken");
  const upgradtoken = await UpgradToken.deploy(tokenSupply, tokenName, tokenDecimals, tokenSymbol);

  await upgradtoken.deployed();

  console.log("Upgrad Token deployed to :", upgradtoken.address);
  
  const flaggingThreshold = 5;
  
  // 2. Deploy Governance
  const Governance = await ethers.getContractFactory("Governance");
  const governance = await upgrades.deployProxy(Governance, [flaggingThreshold]);
  
  await governance.deployed();
  
  console.log("Upgradable Governance Contract deployed to :", governance.address);
  
  // 3. Deploy DefiPlatform
  const DefiPlatform = await ethers.getContractFactory("DefiPlatform");
  const defiplatform = await DefiPlatform.deploy(governance.address);
  
  await defiplatform.deployed();
  
  console.log("DefiPlatform Contract deployed to :", defiplatform.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
