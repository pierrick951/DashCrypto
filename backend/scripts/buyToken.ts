async function main2() {
  const { ethers } = require("hardhat");

  const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const tokenPrice = ethers.parseEther("0.01");

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.attach(tokenAddress);

  const accounts = await ethers.getSigners();
  const buyer = accounts[1];

  const amountToBuy = 40;

  const totalValue = tokenPrice * amountToBuy;

  console.log(`solde avant l'achat ${token.BalanceOf(buyer)}`);
  console.log(`Acheteur : ${buyer.address}`);
  console.log(
    `Tentative d'achat de ${amountToBuy} tokens pour ${ethers.utils.formatEther(
      totalValue
    )} ETH`
  );
  await token.connect(buyer).buyToken(amountToBuy, { value: totalValue });
  console.log(
    `${amountToBuy} tokens ont été achetés avec succès par ${buyer.address}`
  );
  console.log(`solde apres l'achat ${token.BalanceOf(buyer)}`);
}

main2().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
