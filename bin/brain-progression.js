#!/usr/bin/env node
import readlineSync from "readline-sync";
import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";
import { getRandomProgression } from "../src/getRandomProgression.js";
import { getRandomInteger } from "../src/getRandomInteger.js";

greetingTheUser;
const rules = "What number is missing in the progression?";
console.log(rules);

const findMissingElementOfProgression = () => {
  let i = 0; // счетчик верных ответов

  while (i < 3) {
    const randomProgression = getRandomProgression(
      getRandomInteger(1, 10),
      getRandomInteger(1, 5)
    );

    const indexOfMissingElement = getRandomInteger(0, 9);
    const missingElement = randomProgression[indexOfMissingElement];
    randomProgression[indexOfMissingElement] = "..";

    const question = `Question: ${randomProgression.join(" ")}`;
    console.log(question);
    const answer = readlineSync.question("Your answer: ");

    if (String(missingElement) === answer) {
      console.log("Correct!");
      i += 1;
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${missingElement}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log(findMissingElementOfProgression());
