require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: "",
      chainId: 11155111,
    },
    goerli: {
      url: "",
      chainId: 5,
    },
    mainnet:{
      url: "",
      chainId: 1, 
    },

  }
};

