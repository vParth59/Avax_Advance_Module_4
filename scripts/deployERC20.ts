import { ethers } from "hardhat";

async function main() {
  const erc20 = await ethers.deployContract("ERC20");

  await erc20.waitForDeployment();

  console.log(`ERC20 deployed to ${erc20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
