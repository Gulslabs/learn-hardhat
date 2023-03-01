// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Car {
    address public owner;
    address public carAddr;
    string public model;

    constructor(address _owner, string memory _model) payable {
        owner = _owner;
        carAddr = address(this);
        model = _model;
    }
}

contract CarFactory {
    Car[] public cars;

    function carWithValue(
        address _owner,
        string calldata _model
    ) public payable {
        Car car = (new Car){value: msg.value}(_owner, _model);
        // (new LotteryPot).value(amount)
        cars.push(car);
    }

    function getCar(
        uint _index
    )
        public
        view
        returns (
            address owner,
            string memory model,
            address carAddr,
            uint balance
        )
    {
        Car car = cars[_index];
        return (car.owner(), car.model(), car.carAddr(), address(car).balance);
    }
}
