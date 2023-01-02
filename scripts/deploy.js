//imports

const { ethers, run, network } = require("hardhat");

//func main
async function main() {
  const Storage = await ethers.getContractFactory("Storage");
  console.log("Deploying");
  const storage = await Storage.deploy();
  await storage.deployed();

  console.log(`Deployed to :  ${storage.address}`);
  // console.log(network.config);
  if (network.config.chainId == 5 && process.env.ETHERSCAN_API) {
    await storage.deployTransaction.wait(6);
    await verify(storage.address, []);
  }
}
async function verify(contractAddress, args) {
  console.log(" Verifying Contract");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
}

//main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
