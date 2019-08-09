import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Web3 from 'web3';

// let lotteryAddress = '0xC89C4883D9206f011cC10AeB06558845BCe8Ddfd';
// let lotteryABI = [{ "constant": true, "inputs": [], "name": "answerForTest", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "index", "type": "uint256" }, { "indexed": false, "name": "bettor", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "challenges", "type": "bytes1" }, { "indexed": false, "name": "answerBetInfo", "type": "uint256" }], "name": "BET", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "index", "type": "uint256" }, { "indexed": false, "name": "bettor", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "challenges", "type": "bytes1" }, { "indexed": false, "name": "answer", "type": "bytes1" }, { "indexed": false, "name": "answerBlockNumber", "type": "uint256" }], "name": "WIN", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "index", "type": "uint256" }, { "indexed": false, "name": "bettor", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "challenges", "type": "bytes1" }, { "indexed": false, "name": "answer", "type": "bytes1" }, { "indexed": false, "name": "answerBlockNumber", "type": "uint256" }], "name": "FAIL", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "index", "type": "uint256" }, { "indexed": false, "name": "bettor", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "challenges", "type": "bytes1" }, { "indexed": false, "name": "answer", "type": "bytes1" }, { "indexed": false, "name": "answerBlockNumber", "type": "uint256" }], "name": "DRAW", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "index", "type": "uint256" }, { "indexed": false, "name": "bettor", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "challenges", "type": "bytes1" }, { "indexed": false, "name": "answerBlockNumber", "type": "uint256" }], "name": "REFUND", "type": "event" }, { "constant": true, "inputs": [], "name": "getPot", "outputs": [{ "name": "pot", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "challenges", "type": "bytes1" }], "name": "betAndDistribute", "outputs": [{ "name": "result", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "challenges", "type": "bytes1" }], "name": "bet", "outputs": [{ "name": "result", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "distribute", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "answer", "type": "bytes32" }], "name": "setAnswerForTest", "outputs": [{ "name": "result", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "challenges", "type": "bytes1" }, { "name": "answer", "type": "bytes32" }], "name": "isMatch", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "pure", "type": "function" }, { "constant": true, "inputs": [{ "name": "index", "type": "uint256" }], "name": "getBetInfo", "outputs": [{ "name": "answerBlockNumber", "type": "uint256" }, { "name": "bettor", "type": "address" }, { "name": "challenges", "type": "bytes1" }], "payable": false, "stateMutability": "view", "type": "function" }]

class App extends Component {

  async componentDidMount() {
    await this.initWeb3();
    console.log(this.web3);
    let accounts = await this.web3.eth.getAccounts();
    console.log(accounts);
  }

  initWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
      console.log(`Recent mode`);
      this.web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        // Acccounts now exposed
        // web3.eth.sendTransaction({/* ... */ });
      } catch (error) {
        // User denied account access...
        console.log(`User denied account access error: ${error}`);
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      console.log(`Legacy mode`);
      this.web3 = new Web3(Web3.currentProvider);
      // Acccounts always exposed
      // web3.eth.sendTransaction({/* ... */ });
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
