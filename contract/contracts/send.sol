// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./owner.sol";

contract Sender  is Owner{



    event newTransaction(address indexed author, uint value);

    function setMoney(address payable _address, uint _amount) public payable {
        require(address(this).balance >= _amount,"insufisant balance");
        _address.transfer(_amount);
        emit newTransaction (msg.sender, _amount);
    }
}
