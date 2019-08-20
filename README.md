This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Prerequisites
* yarn
* metamask
* create-react-app
* ganache-cli with smart contract
* You should set your own smart contract address

## Setup
```
$ yarn
$ yarn start
```

Truffle command
```
$ truffle migrate --reset
$ truffle console
$ let lt
$ Lottery.deployed().then(function(instance){lt=instance})
$ let bettor = '0xF76c9B7012c0A3870801eaAddB93B6352c8893DB'
$ web3.eth.sendTransaction({from:bettor, to:'0xc64701cE5E02C4c5A5000Ade74ae6F03b3b5D35B', value: 10000000000000000000})
$ lt.betAndDistribute('0xab', {from: bettor, value:5000000000000000, gas:300000})