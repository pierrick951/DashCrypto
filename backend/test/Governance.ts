import { expect, use } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Governance, Governance__factory } from "../typechain-types";
import { Token, Token__factory } from "../typechain-types";

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
      const cost = amountToBuy * tokenPrice;

      await token.connect(owner).buyToken(amountToBuy, { value: cost });
      await governance.connect(owner).setProposale("eat a crypto fish");

      await token.connect(user1).buyToken(amountToBuy, { value: cost });
      await expect(governance.connect(user1).setVote(owner)).to.emit(
        governance,
        "Vote"
      );
      const userVote = governance.connect(user1).getNumberVote();
      expect(userVote).to.equal(userVote);
    });

    // it("Should not allow user to vote twice", async function () {
    //   // Test implementation
    // });

    // it("Should not allow voting with insufficient balance", async function () {
    //   // Test implementation
    // });
  });
});
