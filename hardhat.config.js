require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.26",
  networks: {
    hardhat: {
      accounts: [
        {
          // Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
          privateKey: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
          balance: "439012345678901234" // ~0.4390 ETH
        },
        {
          // Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
          privateKey: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
          balance: "825678901234567890" // ~0.8256 ETH
        }
      ]
    }
  }
};
