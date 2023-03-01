// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Fallback {
    event Log(string functionName, uint gas);

    // Fallback must be declared as external. Its a function that doesnt take any parameter or doesnt return any parameter.    
    // Executed When: 1) A function that doesnt exists 2) either send directly to smart contract but recieve method doesnt exits OR msg.data is not empty. 
}