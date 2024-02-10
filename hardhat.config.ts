import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-web3";
import "@nomicfoundation/hardhat-network-helpers";

const config: HardhatUserConfig = {
  solidity: "0.8.19",  
  paths: {
    sources: "./contracts/solidity-by-example",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;
