require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const GORELI_RPC_URL = process.env.GORELI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    goreli: {
      url: GORELI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
  solidity: "0.8.8",
};
