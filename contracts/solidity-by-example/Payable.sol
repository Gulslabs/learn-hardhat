// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// Payments can be received by Contract OR Can be received by a payable address.
contract Payable {    
    address payable public owner;
    event Recieved(address contractAddress, uint256 value);

    constructor() {
        // Make Account that deployed this contract as the payable owner.
        owner = payable(msg.sender);        
    }

    function showSender() public view returns (address) {
        return (msg.sender);
    }

    // just call this function and msg.value and the balance of this contract will automatically reflect those many Ethers.
    function deposit() public payable {
        emit Recieved(address(this), msg.value);
    }

    // this call method with some msg.value it will throw an exception; as its not payable.
    function notDeposit() public {}

    // Withdraw all ETH from the contract and send it to the owner.
    function transfer() public {
        uint256 amount = address(this).balance;
        (bool success, ) = owner.call{value: amount}("");
        // Add an event.
        // send is in old version; it doesnt throw exception;  if the call was unsucessfull. Hence we could waste gas and will have to follow up with require call.
        // owner.send(amount);
        // owner.transfer(amount);
        require(success, "FAILED TO SEND ETHER");
    }
}
