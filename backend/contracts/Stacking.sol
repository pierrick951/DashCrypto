// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

interface ContractToken {
    function getContractBalance() external view returns (uint256);

    function getBalanceToken(address _address) external view returns (uint256);
}

contract Stacking is ReentrancyGuard, Ownable {
    ContractToken public tokenContract;

    constructor(address _tokenContractAddress) Ownable(msg.sender) {
        tokenContract = ContractToken(_tokenContractAddress);
    }

    uint256 public lockTime = 1 weeks;
    modifier canClainReward() {
        require(block.timestamp >= users[msg.sender].timeStack + lockTime);
        _;
    }

    event SetStacking(address indexed user, uint256 amountStack);
    event GetReward(address indexed user, uint256 amount);

    struct user {
        uint256 stack;
        uint256 timeStack;
        bool hasStack;
    }

    mapping(address => user) users;

    function stackToken(uint256 _amountStack) public payable nonReentrant {
        user storage CurentUser = users[msg.sender];
        require(!CurentUser.hasStack, "You have already a stack");

        uint256 balanceUserToken = tokenContract.getBalanceToken(msg.sender);

        require(balanceUserToken >= _amountStack, "Not enougth Token provided");
        CurentUser.hasStack = true;
        CurentUser.timeStack = block.timestamp;
        CurentUser.stack = _amountStack;

        emit SetStacking(msg.sender, _amountStack);
    }

    function getReward() public payable canClainReward {
        user storage CurentUser = users[msg.sender];
        require(CurentUser.hasStack, "You don't have a active stack");
        uint256 reward = CalculReward(CurentUser.timeStack, CurentUser.stack);

        CurentUser.timeStack = block.timestamp;
        CurentUser.stack += reward;
        emit GetReward(msg.sender, reward);
    }

    function CalculReward(
        uint256 _timeUser,
        uint256 _amount
    ) internal view returns (uint256) {
        uint256 time = block.timestamp - _timeUser;
        uint256 timeReward = time / 1 weeks;
        return (_amount * timeReward) * 100;
    }

    function stopStack() public payable nonReentrant {
        user storage CurentUser = users[msg.sender];
        require(CurentUser.hasStack, "You don't have a active stack");
        require(
            block.timestamp > CurentUser.timeStack + 1 days,
            "It'stoo early to stop  your stack "
        );
    }

    function getStacking() public view returns (uint256) {
        return users[msg.sender].stack;
    }
}
