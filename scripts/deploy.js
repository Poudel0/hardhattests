//imports

const { ethers } = require("hardhat");

//func main
async function main() {
  const Storage = await ethers.getContractFactory("Storage");
  console.log("Deploying");
  const storage = await Storage.deploy();
  await storage.deployed();

  console.log(`Deployed to :  ${storage.address}`);
}
//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
