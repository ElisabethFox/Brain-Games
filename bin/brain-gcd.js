#!/usr/bin/env node
import readlineSync from "readline-sync";
import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";
import { getRandomInteger } from "../src/getRandomInteger.js";
import { getTheGreatestCommonDivisor } from "../src/getTheGreatestCommonDivisor.js";

greetingTheUser;
const rules = "Find the greatest common divisor of given numbers.";
console.log(rules);

const findTheGreatestCommonDivisor = () => {
  let i = 0; // счетчик верных ответов

  while (i < 3) {
    const randomInteger_1 = getRandomInteger(0, 100);
    const randomInteger_2 = getRandomInteger(0, 100);
    const result = getTheGreatestCommonDivisor(
      randomInteger_1,
      randomInteger_2
    );

    const question = `Question: ${randomInteger_1} ${randomInteger_2}`;
    console.log(question);
    const answer = readlineSync.question("Your answer: ");

    if (String(result) === answer) {
      console.log("Correct!");
      i += 1;
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log(findTheGreatestCommonDivisor());
