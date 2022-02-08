const UpgradToken = artifacts.require("UpgradToken");

const tokenSupply = 10000000;
const tokenName = "GradCoin";
const tokenDecimals = 0;
const tokenSymbol = "GRAD";

module.exports = deployer => {
    deployer.deploy(
            UpgradToken,
            tokenSupply,
            tokenName,
            tokenDecimals,
            tokenSymbol
    );
};
