# oz-merkle-support
>MyContract.sol to show issue with keccakFromString() in merkleTree.js 

See [issue #254](https://github.com/ethereumjs/ethereumjs-util/issues/254)  

[Visit Topic on OpenZeppelin Forum](https://forum.openzeppelin.com/t/merkleproof-sol-claim-error-vm-exception-while-processing-transaction/2918/4)

Project Setup
============

Clone this GitHub repository.

# Steps to compile and test MyContract.sol

  - Local dependencies
    ```sh
    $ npm i
    ```
## Running the project with local test network (ganache-cli)
    
   - Start ganache-cli with the following command:
     ```sh 
     $ ganache-cli
     ``` 
   - Test the smart contract using Truffle & Gananche with the following command:
     ```
     $ truffle test
     ```
