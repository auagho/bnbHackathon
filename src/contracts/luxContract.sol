// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract SimpleContract is ERC20 {
    using SafeERC20 for IERC20;

    uint256 public constant TOTAL_SUPPLY = 10**9 * 10**18; // 1 billion tokens

    constructor() ERC20("LUX Token", "LUX") {
        _mint(address(this), TOTAL_SUPPLY);
    }

    struct TransactionInfo {
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => TransactionInfo[]) public userTransactionMapping;

    event TransactionRegistered(address indexed user, uint256 amount, uint256 timestamp);

    function registerTransaction(uint256 amount) external {
        // Record the transaction information
        TransactionInfo memory info = TransactionInfo(amount, block.timestamp);
        userTransactionMapping[msg.sender].push(info);

        emit TransactionRegistered(msg.sender, amount, block.timestamp);

        // Transfer tokens from the contract to the caller
        _transfer(address(this), msg.sender, amount * 10**18);
    }

    function getUserTransactions(address user) external view returns (uint256[] memory, uint256[] memory) {
        TransactionInfo[] storage transactions = userTransactionMapping[user];
        uint256 numTransactions = transactions.length;

        uint256[] memory amounts = new uint256[](numTransactions);
        uint256[] memory timestamps = new uint256[](numTransactions);

        for (uint256 i = 0; i < numTransactions; i++) {
            amounts[i] = transactions[i].amount;
            timestamps[i] = transactions[i].timestamp;
        }

        return (amounts, timestamps);
    }
}