// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20, Ownable, ReentrancyGuard {
    uint256 initialSuply;
    uint constant tokenPrice = 0.01 ether;

    event TokenPurchased(address indexed buyer, uint256 amount);

    constructor(
        uint256 _initialSuply
    ) ERC20("Yuzu", "YZU") Ownable(msg.sender) {
        initialSuply = _initialSuply;
        _mint(address(this), _initialSuply);
    }

    function burnToken(uint256 _amount) public onlyOwner {
        _burn(address(this), _amount);
    }

  function buyToken(uint256 _amountToken) public payable nonReentrant {
    uint256 cost = _amountToken * tokenPrice;
    require(_amountToken > 0, "Must buy at least one token");
    require(msg.value >= cost, "Not enough funds provided");
    require(_amountToken <= balanceOf(address(this)), "Not enough Token available");

    _transfer(address(this), msg.sender, _amountToken);
    
    uint256 excess = msg.value - cost;
    if (excess > 0) {
        payable(msg.sender).transfer(excess);
    }

    emit TokenPurchased(msg.sender, _amountToken);
}

    function getSuplly() public view returns (uint256) {
        return balanceOf(address(this));
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
