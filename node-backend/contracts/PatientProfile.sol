// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.8.0;

contract PatientProfile {
    struct Profile {
        string name;
        uint age;
        string phoneNumber;
        string email;
        string passwordHash;
    }

    mapping(address => Profile) public profiles;

    function setProfile(
        string memory _name,
        uint _age,
        string memory _phoneNumber,
        string memory _email,
        string memory _passwordHash
    ) public {
        Profile memory newProfile = Profile({
            name: _name,
            age: _age,
            phoneNumber: _phoneNumber,
            email: _email,
            passwordHash: _passwordHash
        });
        profiles[msg.sender] = newProfile;
    }

    function getProfile(
        address _address
    )
        public
        view
        returns (
            string memory,
            uint,
            string memory,
            string memory,
            string memory
        )
    {
        Profile memory profile = profiles[_address];
        return (
            profile.name,
            profile.age,
            profile.phoneNumber,
            profile.email,
            profile.passwordHash
        );
    }
}
