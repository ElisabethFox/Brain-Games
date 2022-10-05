import { getRandomInteger } from "../helper.js";
import { playTheGame } from "../index.js";

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isTheIntegerPrime = (integer) => {
  for (let i = integer - 1; i > 1; i -= 1) {
    if (integer % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(2, 50);
  const correctAnswer = isTheIntegerPrime(question) ? "yes" : "no";

  return [question, correctAnswer];
};

export default () => {
  playTheGame(task, getQuestionAndAnswer);
};
