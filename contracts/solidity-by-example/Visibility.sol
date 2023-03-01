// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// public   - any contract and account can call. 
// external - only other contracts and accounts can call. 

// internal - only from contracts that inherit an internla function. 
// private  - online inside the contract where this function is defined. 

contract Base {

    function publicFunc() public pure returns(string memory){
        return "Public Function";
    }

    function privFunc() private pure returns(string memory) {
        return "Private Function"; 
    }

    function externalFunction() external pure returns(string memory) {
        return "Private Function"; 
    }

    function internalFunction() internal pure returns(string memory) {
        return "Private Function"; 
    }


}