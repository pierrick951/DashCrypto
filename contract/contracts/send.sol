// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract Sender is Ownable {
    event newTransaction(address indexed author, uint value);
    constructor() Ownable(msg.sender) {}

    function setMoney(address payable _address, uint _amount) public payable {
        require(msg.value >= _amount, "insufisant balance");
        require(_address != address(0), "Invalid address");
        _address.transfer(_amount);
        emit newTransaction(msg.sender, _amount);
    }
}
