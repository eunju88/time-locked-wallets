var TimeLockedWalletFactory = artifacts.require("TimeLockedWalletFactory");
var JHGToken = artifacts.require("JHGToken");

module.exports = function(deployer) {
  deployer.deploy(TimeLockedWalletFactory);
  deployer.deploy(JHGToken);
};
