import { ethers } from "hardhat";

async function main() {
  const TokenFactory = await ethers.getContractFactory("Token");
  const token = await TokenFactory.deploy(10000);
  return token;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
