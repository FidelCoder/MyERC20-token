const GRFToken = artifacts.require('GRFToken');

module.exports = function (deployer) {
    deployer.deploy(GRFToken),1000000;
}