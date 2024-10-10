import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Token__factory, Token } from "../typechain-types";

describe("Token", function () {
  let user1: SignerWithAddress;
  let owner: SignerWithAddress;
  let token: Token;

  beforeEach("token Factory", async function () {
    const tokenFactory = (await ethers.getContractFactory(
      "Token"
    )) as Token__factory;
    [owner, user1] = await ethers.getSigners();
    token = await tokenFactory.deploy(1000);
  });

  describe("admin", function () {
    it("Admin should burn token", async function() {
        const suplly = await token.getSupply();
        const burnAmount = 2n; 
    
        await token.connect(owner).burnToken(burnAmount); 
        const finalSuplly = await token.getSupply(); 
    
        expect(finalSuplly).to.equal(suplly - burnAmount); 
    });

    it("user should burn token", async function () {
      const burnAmount = 2n;
      await expect(
        token.connect(user1).burnToken(burnAmount)
      ).to.be.revertedWithCustomError(token, "OwnableUnauthorizedAccount");
    });
  });

  describe("buy token ", function () {
    it("Should buy token", async function () {
      const tokenPrice = 100;
      const amountToBuy = 1;
      const cost = amountToBuy * tokenPrice;

      await expect(token.connect(user1).buyToken(amountToBuy, { value: cost }))
        .to.emit(token, "TokenPurchased")
        .withArgs(user1.address, amountToBuy);
      const userBalance = await token.balanceOf(user1.address);
      expect(userBalance).to.equal(amountToBuy);
    });

    it("Amount should  is small than contract balance", async function () {
      const tokenPrice = 100;
      const amountToBuy = 1;
      const insufficientValue = tokenPrice - 1;

      await expect(
        token.connect(user1).buyToken(amountToBuy, { value: insufficientValue })
      ).to.be.revertedWith("Not enough funds provided");
    });
  });
});
