// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// https://www.youtube.com/watch?v=n6nEPaE7KZ8&list=PLO5VPQH6OWdULDcret0S0EYQ7YcKzrigz&index=18
contract MerkleProof {
    //proof: hashes needed to recreate merke root
    //root: The root itself
    //leaf: The Leaf Node (or the transaction) to be validated.
    //index: Index of the leaf node(or the transaction) from zero starting at left. This is same for all levels(leaf level or branch level)
    function verify(
        bytes32[] memory _proof,
        bytes32 _root,
        bytes32 _leaf,
        uint256 _index
    ) public pure returns (bool) {
        bytes32 hash = _leaf;
        // recompute merkle root
        for (uint256 i = 0; i < _proof.length; i++) {
            if (_index % 2 == 0) {
                // index is to left
                hash = keccak256(abi.encodePacked(hash, _proof[i]));
            } else {
                // index to right
                hash = keccak256(abi.encodePacked(_proof[i], hash));
            }
            // compute the index of next level. (if 2K or 2K+1 represents the leaf node; then its parent wil be K. Hence we divide by 2 and get the whole number reminder)
            _index = _index / 2;
        }
        return hash == _root;
    }
}

contract Merkle {
    bytes32[] hashes;

    constructor() {
        // start with hashes of 4 transactions.
        string[4] memory transactions = [
            "Me --> You",
            "Mark --> Andrew",
            "Bob --> Davis",
            "Tom --> Jerry"
        ];
        for (uint8 i = 0; i < transactions.length; i++) {
            // generate hash 256 of transactions; this would be the leaf level nodes of Mekle.
            hashes.push(keccak256(abi.encodePacked(transactions[i])));
        }
        // generate higer level nodes by iterating transaction(leaf)-level hashes.
        uint256 n = transactions.length;

        // Start with zero offset for every level.
        uint256 offset = 0;

        while (n > 0) {
            for (uint8 i = 0; i < n - 1; i += 2) {
                // every iteration consider two elements.
                hashes.push(
                    keccak256(
                        abi.encodePacked(
                            hashes[offset + i],
                            hashes[offset + i + 1]
                        )
                    )
                );
            }
            offset = offset + n;
            n = n / 2;
        }
    }
    
    function getRoot() public view returns (bytes32) {
        return hashes[hashes.length - 1];
    }
}
