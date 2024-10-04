async function main2() {
  const { ethers } = require("hardhat");

  const tokenAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const tokenPrice = ethers.parseEther("0.00001");

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.attach(tokenAddress);

  // Récupérer les comptes
  const accounts = await ethers.getSigners();
  const buyer = accounts[1]; 

  const amountToBuy = 4;

  const totalValue = tokenPrice * amountToBuy;

  console.log(`Acheteur : ${buyer.address}`);
  console.log(
    `Tentative d'achat de ${amountToBuy} tokens pour ${ethers.utils.formatEther(
      totalValue
    )} ETH`
  );

  console.log(
    `${amountToBuy} tokens ont été achetés avec succès par ${buyer.address}`
  );
}

main2().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
