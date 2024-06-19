import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

const _PRIVATE_KEY = process.env.PRIVATE_KEY;
console.log("Private Key:", _PRIVATE_KEY);

dotenv.config();

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {},
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [_PRIVATE_KEY],
    },

    mySubnet: {
      url: "http://127.0.0.1:9650/ext/bc/BEkM2RXobjxBMQqJoHm9Y5b7uY3tXJfHfsNnAqo33XwoWvYvo/rpc",
      accounts: [_PRIVATE_KEY],
      chainID: 79,
    },
  },
};
