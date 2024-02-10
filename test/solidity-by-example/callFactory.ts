import { expect } from 'chai';
import { ethers } from 'hardhat';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';

describe("Car Factory", function () {
    async function startUpFixture() {
        const carFactoryContract = await ethers.getContractFactory("CarFactory");
        const carFactoryInstance = carFactoryContract.deploy();
        return carFactoryInstance;
    }

    it('Create Car Instance and retrieve values', async function () {
        const carFactoryInstance = await loadFixture(startUpFixture);
        //  await caller.testCallToFoo(receiver.address, {value: amount});
        const [carOwner] = await ethers.getSigners();
        await carFactoryInstance.carWithValue(carOwner.address, "BMW 7 SEDAN", { value: 10000 });
        const carInstanse  = await carFactoryInstance.getCar(0);        
        console.log("Car Owner Returned: ",carInstanse.owner);
        console.log("Car Owner Passed: ",carOwner.address);
        expect(carInstanse.owner).equals(carOwner.address);
    });
})
