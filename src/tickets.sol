// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CustomerNameStorage {
    address public owner; 
    mapping(address => string) public customerNames;

    event NameSet(address indexed customer, string name);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function setName(string memory _name) public {
        customerNames[msg.sender] = _name;
        emit NameSet(msg.sender, _name);
    }

    function getName() public view returns (string memory) {
        return customerNames[msg.sender];
    }

    function transferOwnership(address newOwner) public onlyOwner {
        owner = newOwner;
    }
}
