const hre = require("hardhat");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 'ether');
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners();
  const NAME = "TokenMaster";
  const SYMBOL = "TM";

  // Deploy contract
  const TokenMasterFactory = await ethers.getContractFactory("TokenMaster");
  const tokenMaster = await TokenMasterFactory.deploy(NAME, SYMBOL);
  await tokenMaster.waitForDeployment();

  console.log(`Deployed TokenMaster Contract at: ${await tokenMaster.getAddress()}`);

  // List 6 events
  const occasions = [
    {
      name: "UFC Miami",
      cost: tokens(0.3),
      tickets: 0,
      date: "Jul 31",
      time: "6:00PM EST",
      location: "Miami-Dade Arena - Miami, FL"
    },
    {
      name: "ETH Tokyo",
      cost: tokens(0.1),
      tickets: 125,
      date: "Aug 2",
      time: "1:00PM JST",
      location: "Tokyo, Japan"
    },
    {
      name: "ETH Privacy Hackathon",
      cost: tokens(0.025),
      tickets: 200,
      date: "Aug 9",
      time: "10:00AM TRT",
      location: "Turkey, Istanbul"
    },
    {
      name: "Dallas Mavericks vs. San Antonio Spurs",
      cost: tokens(0.5),
      tickets: 0,
      date: "Aug 11",
      time: "2:30PM CST",
      location: "American Airlines Center - Dallas, TX"
    },
    {
      name: "ETH Global Toronto",
      cost: tokens(0.15),
      tickets: 125,
      date: "Aug 23",
      time: "11:00AM EST",
      location: "Toronto, Canada"
    }
  ];

  for (let i = 0; i < 5; i++) {
    const transaction = await tokenMaster.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )
    await transaction.wait();

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
