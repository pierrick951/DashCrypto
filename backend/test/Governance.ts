import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Governance, Governance__factory } from "../typechain-types";
import { Token, Token__factory } from "../typechain-types";
import { time } from "@nomicfoundation/hardhat-network-helpers";

describe("Governance", function () {
  let user1: SignerWithAddress;
  let owner: SignerWithAddress;
  let governance: Governance;
  let token: Token;

  beforeEach(async function () {
    [owner, user1] = await ethers.getSigners();

    const tokenFactory = (await ethers.getContractFactory(
      "Token"
    )) as Token__factory;
    token = await tokenFactory.deploy(ethers.parseEther("10000"));

    const governanceFactory = (await ethers.getContractFactory(
      "Governance"
    )) as Governance__factory;
    governance = await governanceFactory.deploy(await token.getAddress());
  });

  describe("address contract", function () {
    it("Should correctly set the token address in the constructor", async function () {
      const storedTokenAddress = await governance.tokenContract();
      expect(storedTokenAddress).to.equal(await token.getAddress());
    });
  });

  describe("vote", function () {
    it("Should allow user to vote", async function () {
      const tokenPrice = 100;
      const amountToBuy = 3;
      const TOKEN_VOTE = 1;
      const PROPOSALE_PRICE = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token
        .connect(owner)
        .approve(governance.getAddress(), PROPOSALE_PRICE);
      await governance.connect(owner).setProposale("eat a crypto fish");

      await token.connect(user1).buyToken(amountToBuy, { value: cost });
      await token.connect(user1).approve(governance.getAddress(), TOKEN_VOTE);
      await expect(governance.connect(user1).setVote(owner)).to.emit(
        governance,
        "Vote"
      );
      const userVote = await governance.connect(user1).getNumberVote();
      expect(userVote).to.equal(1);
    });

    it("Should not allow user to vote twice", async function () {
      const tokenPrice = 100;
      const amountToBuy = 3;
      const TOKEN_VOTE = 1;
      const PROPOSALE_PRICE = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token
        .connect(owner)
        .approve(governance.getAddress(), PROPOSALE_PRICE);
      await governance.connect(owner).setProposale("eat a crypto fish");

      await token.connect(user1).buyToken(amountToBuy, { value: cost });
      await token.connect(user1).approve(governance.getAddress(), TOKEN_VOTE);
      await governance.connect(user1).setVote(owner);

      expect(governance.connect(user1).setVote(owner)).to.be.revertedWith("");
    });

    it("Should not allow voting with insufficient balance", async function () {
      const tokenPrice = 100;
      const amountToBuy = 3;
      const PROPOSALE_PRICE = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token
        .connect(owner)
        .approve(governance.getAddress(), PROPOSALE_PRICE);
      await governance.connect(owner).setProposale("eat a crypto fish");

      await expect(governance.connect(user1).setVote(owner)).to.be.revertedWith(
        "not enougth token for vote"
      );
    });
  });

  describe("Proposale", function () {
    it("user should make a proposal", async function () {
      const tokenPrice = 100;
      const amountToBuy = 3;
      const PROPOSALE_PRICE = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token
        .connect(owner)
        .approve(governance.getAddress(), PROPOSALE_PRICE);

      const proposale = await governance
        .connect(owner)
        .setProposale("eat a crypto fish");
      await expect(proposale).to.emit(governance, "Proposale");

      const userProposale = await governance.getUserProposal(owner);
      expect(userProposale).to.equal("eat a crypto fish");
    });

    it("user have efficient token for make a proposal", async function () {
      const tokenPrice = 100;
      const amountToBuy = 1;
      const PROPOSALE_PRICE = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });

      await token
        .connect(owner)
        .approve(governance.getAddress(), PROPOSALE_PRICE);

      await expect(
        governance.connect(owner).setProposale("fish fish fish")
      ).to.be.revertedWith("Don't token provodided");
    });

    it("should verif  if user  has not an already a proposale", async function () {
      const tokenPrice = 100;
      const amountToBuy = 3;
      const PROPOSALE_PRICE = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token
        .connect(owner)
        .approve(governance.getAddress(), PROPOSALE_PRICE);
      await governance.connect(owner).setProposale("eat a crypto fish");

      await expect(
        governance.connect(owner).setProposale("second proposale")
      ).to.be.revertedWith("You have already a proposale");
    });
  });

  describe("Erased", function () {
    it("time over for proposale", async function () {
      const tokenPrice = 100;
      const amountToBuy = 3;
      const PROPOSALE_PRICE = 2;
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await token
        .connect(owner)
        .approve(governance.getAddress(), PROPOSALE_PRICE);
      await governance.connect(owner).setProposale("eat a crypto fish");
      await time.increase(8 * 24 * 60 * 60);
      await governance.connect(owner).erased(owner.address);
      const proposale = await governance.connect(owner).getUserProposal(owner);
      expect(proposale).to.equal("");
    });
  });
});
