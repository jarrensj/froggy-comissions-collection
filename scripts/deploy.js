// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const NarratorFroggy = await hre.ethers.getContractFactory("NarratorFroggy");
  const narratorFroggy = await NarratorFroggy.deploy();

  await narratorFroggy.deployed();
  const receipt = await narratorFroggy.deployTransaction.wait();
  const gasUsed = hexToDec(receipt.gasUsed._hex);
  const aveGwei = 0.000000046;  //average gwei per gas unit used to estimate total cost to deploy contract
  const etherPrice = 3000;  //cost of 1 etherium used to estimate cost to deploy contract
  console.log("narratorFroggy deployed to:", narratorFroggy.address);
  console.log("gas units: ", gasUsed);
  console.log("cost to deploy: ", `\$${gasUsed * aveGwei * etherPrice}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  function hexToDec(hexString){
    return parseInt(hexString, 16);
  } 
