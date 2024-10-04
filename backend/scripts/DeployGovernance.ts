import { ethers } from "hardhat";
//   0x5Da5E19db8b47f0427e9497260b637eb77aF563B
async function main() {

    
  const tokenAddress = "0x1ea675656b01d4E0aD07AdA79BC18866E147808D";

  const GovernanceFcatory = await ethers.getContractFactory("Governance");
  const governance = await GovernanceFcatory.deploy(tokenAddress, { gasLimit:  400000 });

  console.log("stacking deployed at address", await governance.getAddress());

  return governance;
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exitCode = 1;
  });
