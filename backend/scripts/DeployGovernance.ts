import { ethers } from "hardhat";

async function main() {

    
  const tokenAddress = "0x1ea675656b01d4E0aD07AdA79BC18866E147808D";

  const GovernanceFcatory = await ethers.getContractFactory("Governance");
  const governance = await GovernanceFcatory.deploy(tokenAddress);

  console.log("stacking deployed at address", await governance.getAddress());

  return governance;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exitCode = 1;
  });
