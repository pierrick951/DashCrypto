// scripts/interactWithToken.js
const { ethers } = require("hardhat");

async function main() {
    // Adresse du contrat déployé
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

    // Connexion au contrat
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.attach(contractAddress);

    // Adresse du compte acheteur
    const buyerAddress = "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E";

    const contractBalance = await token.balanceOf(contractAddress);
    console.log("Solde du contrat avant l'achat:", contractBalance.toString());

    // Obtenir un signer pour l'acheteur
    const [deployer] = await ethers.getSigners();
    const buyer = deployer.connect(ethers.provider);

    // Nombre de tokens à acheter
    const amountToBuy =  ethers.toBigInt(2);
    const tokenPrice = ethers.parseEther("0.01");

    const totalCost = tokenPrice * amountToBuy ;
    console.log("Coût total pour", amountToBuy.toString(), "tokens:", ethers.formatEther(totalCost), "ETH");

    // Vérifier le solde avant l'achat
    const balanceBefore = await token.balanceOf(buyerAddress);
    console.log("Solde avant l'achat:", balanceBefore.toString());

    // Effectuer l'achat
    try {
        const tx = await token.connect(buyer).buyToken(amountToBuy, { value: totalCost });
        await tx.wait();
        console.log(`${amountToBuy} tokens ont été achetés avec succès par ${buyerAddress}`);
    } catch (error) {
        console.error("Erreur lors de l'achat:", error);
    }

    console.log("Solde après l'achat:", amountToBuy);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });