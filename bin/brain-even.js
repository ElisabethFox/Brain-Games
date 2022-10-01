#!/usr/bin/env node
import readlineSync from "readline-sync";
import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";
import { getRandomInteger } from "../bin/getRandomInteger.js";

greetingTheUser;
console.log('Answer "yes" if the number is even, otherwise answer "no"');

const isTheNumberEven = () => {
  let i = 0; // счетчик верных ответов

  while (i < 3) {
    const randomInteger = getRandomInteger();
    const question = `Question: ${randomInteger}`;
    console.log(question);
    const answer = readlineSync.question("Your answer: ");
    if (
      (randomInteger % 2 === 0 && answer === "yes") ||
      (randomInteger % 2 !== 0 && answer === "no")
    ) {
      console.log("Correct!");
      i += 1;
    } else if (randomInteger % 2 !== 0 && answer === "yes") {
      return `'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log(isTheNumberEven());
