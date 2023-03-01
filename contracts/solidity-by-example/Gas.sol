// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Gas {
    // Gas & Gas Price.
    // using up all gas you send; cauing your trsanction to fail.
    // state is undone. Gas is not refunded.
    uint256 public i = 0;

    function forever() public {
        while (true) {
            i += 1;
        }
    }

    // Dont write unbonded loops. For this reason while and do-while are
    function loop() pure public {
        for (uint256 j = 0; j < 10; j++) {
            if (j == 3) {
                continue;
            }
            if (j == 5) {
                break;
            }
        }
    }
    // Maps
    mapping(address=>uint) mymap;
    function get(address _addr) public view returns(uint) {
        return mymap[_addr];
    }

    function set(uint _value, address _addr) public {
        mymap[_addr] = _value; 
    }

    function remove(address _addr) public {
        delete mymap[_addr];
    }

     

}
