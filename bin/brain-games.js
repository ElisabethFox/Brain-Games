#!/usr/bin/env node.

import { getTheUserName } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
console.log(`Hello, ${getTheUserName()}!`);
