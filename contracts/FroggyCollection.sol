// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract FroggyCollection is Ownable, ERC721A {

    // Contract URI
    string public CONTRACT_URI;
    string public BASE_URI;

    constructor() ERC721A("A Froggy Collection", "FCC") {}

    function teamMint(uint256 quantity, address receiver) public onlyOwner {
        _safeMint(receiver, quantity);
    }

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "The caller is another contract");
        _;
    }    

    function setBaseURI(string memory _baseURI) public onlyOwner {
        BASE_URI = _baseURI;
    }

    function contractURI() public view returns (string memory) {
        return CONTRACT_URI;
    }

    function setContractURI(string memory _contractURI) public onlyOwner {
        CONTRACT_URI = _contractURI;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        return string(abi.encodePacked(BASE_URI, Strings.toString(_tokenId)));
    }
}