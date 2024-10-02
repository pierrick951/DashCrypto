// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Governance is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;
    IERC20 public tokenContract;

    uint8 constant TOKEN_VOTE = 1;
    uint8 constant PROPOSALE_PRICE = 2;

    constructor(address _tokenContractAddress) Ownable(msg.sender) {
        tokenContract = IERC20(_tokenContractAddress);
    }

    struct User {
        string userProposal;
        uint8 numberOfVote;
        uint8 numberOfProposal;
        uint16 CountProposaleVote;
        uint256 TimeProposale;
        bool hasProposal;
    }

    mapping(address => mapping(address => bool)) Voting;
    mapping(address => User) Users;

    event Proposale(address indexed contributeur, string _proposal);
    event Vote(address indexed vote, string _proposal);

    function setVote(address _Adressproposal) public nonReentrant {
        User storage currentUser = Users[msg.sender];
        User storage addressProposal = Users[_Adressproposal];

        uint256 balanceToken = tokenContract.balanceOf(msg.sender);
        require(balanceToken >= 10, "not enougth token for vote");
        require(
            addressProposal.hasProposal,
            "This user does not have a proposal."
        );

        require(
            !Voting[msg.sender][_Adressproposal],
            "You have already voted for your own proposal."
        );

        currentUser.numberOfVote += 1;

        tokenContract.safeTransferFrom(msg.sender, address(this), TOKEN_VOTE);

        emit Vote(msg.sender, addressProposal.userProposal);
    }

    function erased(address _address) public {
        User storage currentUser = Users[_address];

        require(
            block.timestamp >= currentUser.TimeProposale + 1 weeks,
            "Time Over"
        );
        currentUser.TimeProposale = 0;
        currentUser.userProposal = "";
        currentUser.hasProposal = false;
    }

    function setProposale(string memory _proposal) public {
        User storage currentUser = Users[msg.sender];
        uint256 balanceToken = tokenContract.balanceOf(msg.sender);
        require(!currentUser.hasProposal, "You have already a proposale");
        require(balanceToken >= PROPOSALE_PRICE, "Don't token provodided");

        currentUser.userProposal = _proposal;
        currentUser.hasProposal = true;
        currentUser.numberOfProposal += 1;
        currentUser.TimeProposale = block.timestamp;

        tokenContract.safeTransferFrom(
            msg.sender,
            address(this),
            PROPOSALE_PRICE
        );
        emit Proposale(msg.sender, _proposal);
    }

    function getUserProposal(
        address _user
    ) public view returns (string memory) {
        User storage currentUser = Users[_user];

        return currentUser.userProposal;
    }

    function getNumberVote() public view returns (uint8) {
        return Users[msg.sender].numberOfVote;
    }
}
