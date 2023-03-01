import { expect } from 'chai';
import { ethers, web3 } from 'hardhat';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';


describe('Ballot Test', function () {
    async function startUpFixture() {
        const balotFactory = await ethers.getContractFactory("Ballot");
        const [chairPerson, voter1, voter2, voter3] = await ethers.getSigners();        
        const ballot = await balotFactory.connect(chairPerson).deploy([web3.utils.asciiToHex(web3.utils.padRight("Modi", 32)), web3.utils.asciiToHex(web3.utils.padRight("Rahul", 32))]);
        return { ballot, chairPerson, voter1, voter2, voter3 };
    }
    it('Create an Instance of Ballot', async function () {
        const { ballot, chairPerson, voter1, voter2, voter3 } = await loadFixture(startUpFixture);
        
        await ballot.addVoter(voter1.address);
        await ballot.addVoter(voter2.address);
        await ballot.addVoter(voter3.address);
        
        await ballot.giveRightToVote(voter1.address);        
        await ballot.giveRightToVote(voter2.address);
        await ballot.giveRightToVote(voter3.address);

        await ballot.connect(voter1).vote(1);
        await ballot.connect(voter2).vote(1);
        await ballot.connect(voter3).vote(1);        
        console.log("Winner: ", web3.utils.hexToAscii(await ballot.winnerName()));

    });
}
);