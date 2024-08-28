// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Owner {
    address owner;

    constructor() {
        msg.sender == owner;

    }

    modifier iisOwner() { 
      require(msg.sender == owner);
      _;
    }
}
