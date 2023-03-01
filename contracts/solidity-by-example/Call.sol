// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
// call is the low level way to calling functions on smart contracts; its prefered when you are trying to send eth; but otherwise its not prefered. 

contract Receiver {

    event Received(address caller, uint amount, string message);

    // Fallback method that gets called when no method exists and eth is send and no msg.data 
    fallback() external payable {
        emit Received(msg.sender, 2300, "Fallback is called");
    }

    function foo(string memory _message, uint _x) public payable returns(uint) {
        emit Received(msg.sender, msg.value, _message);
        return _x + 1;     }

}

contract Caller {
    event Response(bool success, bytes data);

    // call with Receiver method address. 
    // Imagine the Caller doesnt have code of Receiver; but only the smart contract address; so we attempt to call method. 

    function testCallToFoo(address payable _receiverAddr) public payable {
            // call the receiver's foo method with some eth. This returns the execution status and all of the message data. 
           (bool status, bytes memory data) = _receiverAddr.call{value: msg.value, gas: 50000}(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
        );        
        emit Response(status, data);
    }

    function testCallThatDoesNotExist(address payable _receiverAddr) public payable {
        (bool status, bytes memory data)  = _receiverAddr.call{value: msg.value}(
            // This attempt should call receiver's Fallback. 
            abi.encodeWithSignature("doesNotExist()")
        );
        emit Response(status, data);
    }
}
