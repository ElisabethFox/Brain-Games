#!/usr/bin/env node
import readlineSync from "readline-sync";
import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";
import {
  getRandomExpression,
  resultOfExpression,
} from "../src/getRandomExpression.js";

greetingTheUser;
const rules = "What is the result of the expression?";
console.log(rules);

const isTheResultOfExpressionCorrect = () => {
  let i = 0; // счетчик верных ответов

  while (i < 3) {
    const task = getRandomExpression();
    const correctAnswer = String(resultOfExpression(task));

    const question = `Question: ${task}`;
    console.log(question);
    const answer = readlineSync.question("Your answer: ");

    const condition = correctAnswer === answer;

    if (condition) {
      console.log("Correct!");
      i += 1;
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log(isTheResultOfExpressionCorrect());
