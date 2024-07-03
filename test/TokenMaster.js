const { expect } = require("chai");

const NAME = "TokenMaster";
const SYMBOL = "TM";

describe("TokenMaster", () => {
  let tokenMaster;
  let deployer, buyer;

  beforeEach(async () => {
    // Setup accounts
    [ deployer, buyer ] = await ethers.getSigners();

    // Deploy Contract
    const TokenMasterFactory = await ethers.getContractFactory("TokenMaster");
    tokenMaster = await TokenMasterFactory.deploy(NAME, SYMBOL);
  })

  describe("Deployment", () => {
    it("Sets the name", async () => {
      expect(await tokenMaster.name()).to.equal(NAME);
    })

    it("Sets the symbol", async () => {
      expect(await tokenMaster.symbol()).to.equal(SYMBOL);
    })

    it("Sets the owner", async () => {
      expect(await tokenMaster.owner()).to.equal(deployer.address);
    })
  })
})
