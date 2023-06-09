var Eth = require('web3-eth')
var Web3 = require('web3')
var utils = Web3.utils

var eth = new Eth(Eth.givenProvider || 'http://localhost:8080')

var jsonInterface = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

var contractAddr = '0x6e3eed104391f66914C0c9bc8FaAF674a8b79b54'
var account1 = '0x01A151CC5ED14d110cc0e6b64360913DE9f453F1'
var myContract = new eth.Contract(jsonInterface, contractAddr)

// checked : https://web3js.readthedocs.io/en/v3.0.0-rc.5/web3-eth-contract.html#methods-mymethod-call
// contract.method.call() is "constant" method only
// myContract.methods.mint(utils.toBN(10000)).call().then(console.log)

myContract.methods.name().call().then(console.log)
