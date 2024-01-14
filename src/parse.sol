// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract JSONParsingExample {
    struct Player {
        string name;
        uint256 jerseyNumber;
    }

    struct Team {
        string teamName;
        string password;
        Player[] players;
    }

    mapping(address => Team) public teams;

    event TeamRegistered(address indexed teamAddress, string teamName);

    function registerTeam(string memory _teamName, string memory _password, Player[] memory _players) external {
        Team storage newTeam = teams[msg.sender];
        newTeam.teamName = _teamName;
        newTeam.password = _password;
        for (uint256 i = 0; i < _players.length; i++) {
            newTeam.players.push(_players[i]);
        }
        emit TeamRegistered(msg.sender, _teamName);
    }
 
}
