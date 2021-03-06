"use strict";

import "ethers/dist/shims.js";
// Note: ethers SHOULD be imported from their main object
// shims aren't injected with package import
import { ethers } from "ethers";
// import { Wallet } from "ethers/Wallet";

const create = async () => {
  try {
    const wallet = ethers.Wallet.createRandom();
    return wallet;
  } catch (error) {
    throw new Error(`Error creating wallet: ${error.message}`);
  }
};

export const Account = {
  create
};

const Tasit = {
  Account
};

export default Tasit;
