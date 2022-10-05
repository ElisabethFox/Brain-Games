import readlineSync from "readline-sync";
import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";

const playTheGame = (task, getQuestionAndAnswer) => {
  greetingTheUser;
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question("Your answer: ");

    if (answer === correctAnswer) {
      console.log("Correct!");
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export { playTheGame };
