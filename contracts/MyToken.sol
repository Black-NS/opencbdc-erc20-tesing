// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

interface IERC20 {
    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns (uint);

    event Transfer(address indexed from, address indexed to, uint value);
}

contract MyToken is IERC20 {
    uint public totalSupply;
    string public name = "MyToken";
    string public symbol = "MTK";

    mapping (address => uint) public balanceOf;

    function mint(uint amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;

        emit Transfer(address(0), msg.sender, amount);
    }
}
