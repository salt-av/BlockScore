from web3 import Web3

web3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY'))

contract_address = '0x78108d828615Db93c7EDEE10A955118DeD7a03D4'
contract_abi =  [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "teamAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "teamName",
                    "type": "string"
                }
            ],
            "name": "TeamRegistered",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_teamName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_password",
                    "type": "string"
                },
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "jerseyNumber",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct JSONParsingExample.Player[]",
                    "name": "_players",
                    "type": "tuple[]"
                }
            ],
            "name": "registerTeam",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "teams",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "teamName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]

contract = web3.eth.contract(address=contract_address, abi=contract_abi)

# Replace 'YOUR_TEAM_ADDRESS' with the Ethereum address of the team you want to query
team_address = 'YOUR_TEAM_ADDRESS'

# Retrieve team data
team_data = contract.functions.teams(team_address).call()

# Access team name and other data
team_name = team_data['teamName']
password = team_data['password']
players = team_data['players']

print(f'Team Name: {team_name}')
print(f'Password: {password}')
print(f'Players: {players}')
