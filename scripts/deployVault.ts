import { ethers } from "hardhat";

const ERC20_adderss = "";

async function main() {
  const vault = await ethers.deployContract("Vault", [ERC20_adderss]);

  await vault.waitForDeployment();

  console.log(`vault deployed to ${vault.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
