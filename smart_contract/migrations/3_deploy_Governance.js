const Governance = artifacts.require("Governance");

const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

module.exports = async (deployer) => {

	var flaggingThreshold = 5;
	const existing = await deployProxy(Governance, [flaggingThreshold], {deployer});
	const instance = await upgradeProxy(existing.address, Governance, {deployer});
    console.log("Upgraded ", instance.address);
};
