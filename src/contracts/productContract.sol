// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ProductContract {
    mapping(address => string[]) public userProductMapping;

    event ProductRegistered(address indexed user, string[] productIds);

    function registerProduct(string memory productId) external {
        userProductMapping[msg.sender].push(productId);
        emit ProductRegistered(msg.sender, userProductMapping[msg.sender]);
    }

    function getProduct() external view returns (string[] memory) {
        return userProductMapping[msg.sender];
    }
}
