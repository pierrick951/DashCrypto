import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const TokenFactory = await ethers.getContractFactory("Token");
  const token = await TokenFactory.deploy(1000 , { gasLimit:  300000 });
 

  console.log("Token deployed at address:", await token.getAddress());
  return token;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
