import * as greetingTheUser from "../src/cli.js";
import { userName } from "../src/cli.js";

const playTheGame = (task, round) => {
  greetingTheUser;
  console.log(task);

  let i = 0; // счетчик верных ответов

  while (i < 3) {
    round;

    if (answer === correctAnswer) {
      console.log("Correct!");
      i += 1;
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
  }

  return `Congratulations, ${userName}!`;
};

export { playTheGame };
