#!/usr/bin/env node
import readlineSync from "readline-sync";
import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";
import { getRandomInteger } from "../bin/getRandomInteger.js";

greetingTheUser;
console.log("What is the result of the expression?");

const getRandomExpression = (operators = ["+", "-", "*"]) => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];

  return `${getRandomInteger()} ${randomOperator} ${getRandomInteger()}`;
};

const resultOfExpression = (expression) => {
  const elements = expression.split(" ");
  let result = Number(elements[0]);

  switch (elements[1]) {
    case "+":
      result += Number(elements[2]);
      break;
    case "-":
      result -= Number(elements[2]);
      break;
    default:
      result *= Number(elements[2]);
  }

  return result;
};

const isTheResultOfExpressionCorrect = () => {
  let i = 0; // счетчик верных ответов

  while (i < 3) {
    const randomExpression = getRandomExpression();
    const resultOfRandomExpression = resultOfExpression(randomExpression);

    const question = `Question: ${randomExpression}`;
    console.log(question);
    const answer = readlineSync.question("Your answer: ");

    if (String(resultOfRandomExpression) === answer) {
      console.log("Correct!");
      i += 1;
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${resultOfRandomExpression}'.\nLet's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

console.log(isTheResultOfExpressionCorrect());
