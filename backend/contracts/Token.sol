// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20, Ownable, ReentrancyGuard {
    uint256 initialSuply = 1_000_000;
    uint tokenPrice = 100 wei;
    event TokenPurchased(address indexed buyer, uint256 amount);

    constructor() ERC20("Yuzu", "YZU") Ownable(msg.sender) {
        _mint(address(this), initialSuply);
    }

    function burnToken(uint256 _amount) public onlyOwner {
        _burn(address(this), _amount);
    }

    function buyToken(uint256 _amountToken) public payable nonReentrant {
        require(
            msg.value >= _amountToken * tokenPrice,
            "Not enough funds provided"
        );
        require(
            _amountToken <= balanceOf(address(this)),
            "Not enough Token avaible"
        );

        _transfer(address(this), msg.sender, _amountToken);
        emit TokenPurchased(msg.sender, _amountToken);
    }

}
