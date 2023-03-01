// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ballot {
    // to represent a single voter
    struct Voter {
        address self;
        uint weight; // weight either "1" or > 1; if accumulated weight by delegation.
        bool voted; // voted or not.
        address delegate; // address of the person to whom you delegate your vote.
        uint vote; // index of the proposal that you voted.
    }
    // mapping for the voters who have voted.
    mapping(address => Voter) public voters;

    // Single candiate, person or proposal. Lets use general term proposal
    struct Proposal {
        bytes32 name;
        uint voteCount;
    }

    // maintain proposals
    Proposal[] proposals;

    address chairperson; // creator of the contract Instance(msg.sender) can add new proposals.

    constructor(bytes32[] memory proposalNames) {
        chairperson = msg.sender;
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
    }

      // method to add voter
    function addVoter(address _voter) public {
        require(voters[_voter].self != _voter, "This Voter has already exits.");
        voters[_voter] = Voter({
            self: _voter,
            weight: 0,
            voted: false,
            delegate: address(this), // dummy delegation. 
            vote: 10000
        });
    }

    function giveRightToVote(address voter) public {

        require(
            msg.sender == chairperson,
            "Only Chairperson can provide voting rights"
        );
        require(
            !voters[voter].voted,
            "Rights already exists; This Voter has already Voted."
        );
        require(
            voters[voter].weight == 0,
            "This voter already has right to vote"
        );
        voters[voter].weight = 1;
    }

  

    // Vote.
    function vote(uint _proposal) public {
        Voter storage voter = voters[msg.sender];
        require(
            voter.weight != 0,
            "Voter has No right to Vote OR Already Voted!"
        );
        require(!voter.voted, "Voter has already voted");
        voter.voted = true;
        voter.vote = _proposal;
        proposals[_proposal].voteCount += voter.weight;
        voter.weight = 0;
    }

    //Delegate
    function delegate(address _to) external {
        Voter storage voter = voters[msg.sender];
        require(voter.weight != 0, "Voter has no right to Vote");
        require(!voter.voted, "Voter has already voted");
        // Delegation loop: Situation where delegator has delegated to someone else; not handled.
        Voter storage delegator = voters[_to];
        require(
            delegator.weight > 1,
            "Cannot delegate to another voter(Account) that has no weight"
        );
        // first take away voting right of voter who is delegating
        voter.voted = true;
        voter.delegate = _to;
        if (delegator.voted) {
            // since the delegator has already voted copy over voter's count.
            proposals[delegator.vote].voteCount += voter.weight;
        } else {
            // update the delegator's weight and set the voter weight to 0
            delegator.weight += voter.weight;
            voter.weight = 0;
        }
    }

    function winningProposal() public view returns (uint winningProposalIndex_) {
        uint winningCount_ = 0; 
        for (uint i = 0; i < proposals.length; i++) {
            if(proposals[i].voteCount>winningCount_){
                winningCount_ = proposals[i].voteCount; 
                winningProposalIndex_ = i; 
                }
        }
    }
    function winnerName() external view returns (bytes32 winnerName_) {
        winnerName_ = proposals[winningProposal()].name; 
    }


}
