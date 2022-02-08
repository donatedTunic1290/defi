const Governance = artifacts.require("Governance");
const DeFiPlatform = artifacts.require("DeFiPlatform");

module.exports = async deployer => {
    const governance = await Governance.deployed();
    await deployer.deploy(DeFiPlatform, governance.address);
};
