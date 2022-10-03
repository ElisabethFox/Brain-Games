#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getRandomInteger } from "../src/getRandomInteger.js";

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const isTheNumberEvenRound = () => {
  const randomInteger = getRandomInteger(0, 100);
  const question = `Question: ${randomInteger}`;
  console.log(question);
  const answer = readlineSync.question("Your answer: ");
  const correctAnswer = randomInteger % 2 ? "yes" : "no";

  return answer, correctAnswer;
};

export { task, isTheNumberEvenRound };
