# froggy-comissions-contract

mint function (team mint)
- parameters
    - wallet address 
    - quantity to mint 

setBaseUri

no upper bound

# Deployment Steps
Confirm .env files contain proper keys and deployment api for app.  Will need to change api when going from Rinkeby to Mainnet.

npm install 

npx hardhat compile

Deploy Rinkeby:  npx hardhat run scripts/deploy.js --network rinkeby

Deploy Mainnet:  npx hardhat run scripts/deploy.js --network mainnet

Verify Contract Rinkeby:  npx hardhat verify 0x709AB0614f897A96B0Fcca2FAdda1011B387C58b --network rinkeby

Verify Contract mainnet:  npx hardhat verify 0x000e7d8cfcbf11da47b55166c4460c8c6106569d --network mainnet

# ongoing 
setContractURI  ipfs://QmeQ4E3aTf2u7rW2VvEruSaCsjFRoyrYeAqWbs6u2oTY9T

# when minting new token 
mint tokens to appriate receivers

step 1. mint function

step 2. setBaseURI (this sets base folder)

ipfs://QmY3N9mRadK5oW6ZJhLiBSiQzjdcDDFkfTodeKNUn6yvoP/

^ update this with new url 

contract address: https://etherscan.io/address/0x000e7d8cfcbf11da47b55166c4460c8c6106569d
