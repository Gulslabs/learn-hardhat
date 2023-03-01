// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract LocationTracker {
 
 struct Location {
    string name;
    uint locationId; 
    uint previousLocationId; 
    uint timeStamp; 
    string secret; 
 }

 mapping(uint => Location) trail; 
 uint8 trailCount; 

 function getTrailCount() public view returns(uint) {
    return trailCount; 
 }

 function getLocation(uint trailNo) public view returns(string memory, uint,uint,uint, string memory) {    
    Location memory  t = trail[trailNo];
    return(t.name, t.locationId, t.previousLocationId,t.timeStamp, t.secret);
 }

 function addLocation(uint _locationId, string calldata _name, string calldata _secret) public 
 {
    Location memory newLocation; 
    newLocation.name = _name; 
    newLocation.locationId =_locationId; 
    newLocation.secret = _secret; 
    newLocation.timeStamp=block.timestamp; 
    if(trailCount!=0){
        newLocation.previousLocationId = trail[trailCount].locationId;
    }
    trail[trailCount]=newLocation;
    trailCount++;
 }

}