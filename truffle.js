var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "judge exhaust security crowd pattern crop roast open kingdom memory ask jar"; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, "http://localhost:8545");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
