import readlineSync from "readline-sync";
import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";

const playTheGame = (task, getQuestionAndAnswer) => {
  greetingTheUser;
  console.log(task);

  let i = 0;
  while (i < 3) {
    const [question, correctAnswer] = getQuestionAndAnswer;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");
    if (answer === correctAnswer) {
      console.log("Correct!");
      i += 1;
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export { playTheGame };
