require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
const { API_URL, PRIVATE_KEYS, ETHERSCAN } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: API_URL,
      accounts: PRIVATE_KEYS.split(","),
      gas: 2100000,
      gasPrice: 8000000000,
      timeoutBlocks: 200,
      timeout: 500000,
      networkCheckTimeout: 5000000 //ridiculously big timeout
    },
    goerli: {
      url: API_URL,
      accounts: PRIVATE_KEYS.split(","),
      gas: 2100000,
      //gasPrice: 8000000000,
      //timeoutBlocks: 200,
      //timeout: 500000,
      //networkCheckTimeout: 5000000 //ridiculously big timeout
    },
    mainnet: {
      url: API_URL,
      accounts: PRIVATE_KEYS.split(","),
      gas: 100000000000,
      //gasPrice: 8000000000,
      //timeoutBlocks: 200,
      //timeout: 500000,
      //networkCheckTimeout: 5000000 //ridiculously big timeout
    }
  },
  mocha: {
    timeout: 60000,
  },
  etherscan: {
    apiKey: ETHERSCAN  //used to verify contract on etherscan
  }
};