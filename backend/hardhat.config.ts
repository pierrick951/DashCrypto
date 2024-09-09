import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks : {
    hardhat : { 
      chainId : 7888
    },
    sepolia : {
    
    }

  },
  gasReporter : {
    enabled : true,
    currency : "USD",
    coinmarketcap: ""
  },
  mocha : {
    timeout: 4000
  },
  paths : {
    tests : "./test",
    sources:  "./contracts"
  }
};

export default config;
