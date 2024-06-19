# Staking_subnet

This repository contains two smart contracts: one, a simple ERC20 contract to generate a new ERC20 token and use its various functionalities, and the other, a vault used to stake/store your ERC20 tokens.

## Description

These Solidity programs allow you to create a new ERC20 token and store it in a vault contract. These two contracts are then deployed on a custom Avalanche Subnet.

### Getting Started

To interact with the contract, you can start-off by cloning this repo and running

```
npm i
```

in the terminal to install all the dependencies required.

To compile the code, run:

```
npx hardhat compile
```

To deploy the code locally on the harhdat network, run:

```
npx hardhat node
```

and then run:

```
npx hardhat run --network mySubnet scripts/deploy.js
```

### Authors

Parth Verma

### License

This project is licensed under the MIT License - see the LICENSE.md file for details
