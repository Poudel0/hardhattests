const { ethers } = require("hardhat");
const { expect, assert } = require("chai");
describe("Storage", function () {
  let storageFactory;
  let storage;
  beforeEach(async function () {
    storageFactory = await ethers.getContractFactory("Storage");
    storage = await storageFactory.deploy();
  });

  it("SHOULD start with a fav number of 0", async function () {
    const currentValue = await storage.retrieve();
    const expectedValue = 0;
    assert.equal(currentValue.toString(), expectedValue);
  });

  it("Should Update when calling store", async function () {
    const expectedValue = 7;
    const transactionResponse = await storage.store(expectedValue);
    await transactionResponse.wait(1);
    const currentValue = await storage.retrieve();
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should Add a person and favnumber", async function () {
    const expectedFavNum = 5;
    const expectedName = "Ram";
    const updatedFavNum = await storage.addPerson(expectedName, expectedFavNum);
    await updatedFavNum.wait(1);
    const { favoriteNumber, name } = await storage.people(0);

    assert.equal(name, expectedName);
    assert.equal(favoriteNumber, expectedFavNum);
  });
});
