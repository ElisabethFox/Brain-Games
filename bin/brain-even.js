#!/usr/bin/env node
import playTheGame from "../games/even.js";

playTheGame();

// import readlineSync from "readline-sync";
// import * as greetingTheUser from "../src/cli.js";
// import { userName } from "../src/cli.js";
// import { getRandomInteger } from "../src/getRandomInteger.js";

// const isTheNumberEven = () => {
//   greetingTheUser;
//   const task = 'Answer "yes" if the number is even, otherwise answer "no"';
//   console.log(task);

//   let i = 0; // счетчик верных ответов

//   while (i < 3) {
//     const randomInteger = getRandomInteger(0, 100);
//     const question = `Question: ${randomInteger}`;
//     console.log(question);
//     const answer = readlineSync.question("Your answer: ");
//     const correctAnswer = randomInteger % 2 === 0 ? "yes" : "no";

//     if (answer === correctAnswer) {
//       console.log("Correct!");
//       i += 1;
//     } else {
//       return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
//     }
//   }

//   return `Congratulations, ${userName}!`;
// };

// console.log(isTheNumberEven());
