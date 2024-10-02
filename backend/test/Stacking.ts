import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { Token, Token__factory } from "../typechain-types";
import { Stacking, Stacking__factory } from "../typechain-types";

describe("Stacking", function () {
  let user1: SignerWithAddress;
  let owner: SignerWithAddress;
  let stacking: Stacking;
  let token: Token;

  beforeEach(async function () {
    [owner, user1] = await ethers.getSigners();

    const tokenFactory = (await ethers.getContractFactory(
      "Token"
    )) as Token__factory;
    token = await tokenFactory.deploy(ethers.parseEther("10000"));

    const stackingFactory = (await ethers.getContractFactory(
      "Stacking"
    )) as Stacking__factory;

    stacking = await stackingFactory.deploy(await token.getAddress());
  });

  describe("address contract", function () {
    it("Should correctly set the token address in the constructor", async function () {
      const storedTokenAddress = await stacking.tokenContract();
      expect(storedTokenAddress).to.equal(await token.getAddress());
    });
  });

  describe("Staking", function () {
    it("user should stack 0", async function () {
      const tokenPrice = 100;
      const amountToBuy = 3;
      const amountToStack = 0;

      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountToStack);

      await expect(
        stacking.connect(owner).stackTokens(amountToStack)
      ).to.be.revertedWith("Amount must be greater than 0");
    });

    it("User should overstack ", async function () {
      const tokenPrice = 100;
      const amountToBuy = 2;
      const amountToStack = 10;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountToStack);

      await expect(
        stacking.connect(owner).stackTokens(amountToStack)
      ).to.be.revertedWith("Not enough Token provided");
    });
    it("User should stack two time", async function () {
      const tokenPrice = 100;
      const amountToBuy = 2;
      const amountToStack = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountToStack);
      await stacking.connect(owner).stackTokens(amountToStack);
      await expect(
        stacking.connect(owner).stackTokens(amountToStack)
      ).to.be.revertedWith("You have already a stack");
    });
    it("should stack token", async function () {
      const tokenPrice = 100;
      const amountToBuy = 2;
      const amountToStack = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountToStack);
      await expect(stacking.connect(owner).stackTokens(amountToStack)).to.emit(
        stacking,
        "Stacked"
      );
    });
  });

  describe("ClaimReward", function () {
    it("user should claim reward", async function () {
      const tokenPrice = 100;
      const amountToBuy = 40;
      const amountReward = 40;
      const amountToStack = 10;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountReward);
      await stacking.connect(owner).addRewards(amountReward);

      await token
        .connect(user1)
        .buyToken(amountToStack, { value: amountToBuy * tokenPrice });
      await token.connect(user1).approve(stacking.getAddress(), amountToStack);
      await expect(stacking.connect(user1).stackTokens(amountToStack)).to.emit(
        stacking,
        "Stacked"
      );

      await time.increase(8 * 24 * 60 * 60);

      await stacking.connect(user1).claimReward();

      const initialBalance = BigInt(await token.balanceOf(user1.address));
      const finalBalance = BigInt(await token.balanceOf(user1.address));

      const expectedReward = BigInt(
        await stacking.estimateReward(user1.address)
      );

      expect(finalBalance - initialBalance).to.equal(expectedReward);
    });

    it("user should claim without a stack", async function () {
      const tokenPrice = 100;
      const amountToBuy = 40;
      const amountReward = 40;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountReward);
      await stacking.connect(owner).addRewards(amountReward);

      await expect(stacking.connect(user1).claimReward()).to.be.revertedWith(
        "You don't have an active stack"
      );
    });
    it("user should claim under the  lock time", async function () {
      const tokenPrice = 100;
      const amountToBuy = 40;
      const amountReward = 40;
      const amountToStack = 10;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountReward);
      await stacking.connect(owner).addRewards(amountReward);

      await token
        .connect(user1)
        .buyToken(amountToStack, { value: amountToBuy * tokenPrice });
      await token.connect(user1).approve(stacking.getAddress(), amountToStack);
      await expect(stacking.connect(user1).stackTokens(amountToStack)).to.emit(
        stacking,
        "Stacked"
      );

      await expect(stacking.connect(user1).claimReward()).to.be.revertedWith(
        "Lock time not elaspsed"
      );
    });
    it("no reward avaible", async function () {
      const tokenPrice = 100;
      const amountToBuy = 40;

      const amountToStack = 10;

      await token
        .connect(user1)
        .buyToken(amountToStack, { value: amountToBuy * tokenPrice });
      await token.connect(user1).approve(stacking.getAddress(), amountToStack);
      await expect(stacking.connect(user1).stackTokens(amountToStack)).to.emit(
        stacking,
        "Stacked"
      );

      await time.increase(8 * 24 * 60 * 60);

      await expect(stacking.connect(user1).claimReward()).to.be.revertedWith(
        " Any Rewards avaible"
      );
    });
  });

  describe("unstack", function () {
    it("user should unstack", async function () {
      const tokenPrice = 100;
      const amountToBuy = 10;
      const amountReward = 10;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountReward);
      await stacking.connect(owner).addRewards(amountReward);

      await token.connect(user1).buyToken(amountToBuy, { value: cost });

      await token.connect(user1).approve(stacking.getAddress(), amountToBuy);

      await stacking.connect(user1).stackTokens(amountToBuy);

      await time.increase(8 * 24 * 60 * 60);

      const initialBalance = await token.balanceOf(user1.address);

      await stacking.connect(user1).unStack();

      const balanceFinal = BigInt(await token.balanceOf(user1.address));

      const difference = balanceFinal - initialBalance;
      expect(difference).to.equal(amountToBuy);
    });
    it("Should unstack without a stack", async function () {
      await expect(stacking.connect(user1).unStack()).to.be.revertedWith(
        "You don't have an active stack"
      );
    });
    it("user should unstack under the time  lock", async function () {
      const tokenPrice = 100;
      const amountToBuy = 10;
      const amountReward = 10;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token.connect(owner).approve(stacking.getAddress(), amountReward);
      await stacking.connect(owner).addRewards(amountReward);

      await token.connect(user1).buyToken(amountToBuy, { value: cost });

      await token.connect(user1).approve(stacking.getAddress(), amountToBuy);

      await stacking.connect(user1).stackTokens(amountToBuy);

      expect(stacking.connect(user1).unStack()).to.be.revertedWith(
        "Lock time not elapsed"
      );
    });
  });

  describe("pause unpaused", function () {
    it("admin should pause contract", async function () {
      await stacking.connect(owner).pauseContract();

      const isPaused = await stacking.paused();
      expect(isPaused).to.equal(true);
    });
    it("user should pause contract", async function () {
      await expect(stacking.connect(user1).pauseContract()).to.be.reverted;
    });
  });
});
