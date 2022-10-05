import { getRandomInteger } from "../src/helper.js";
import { playTheGame } from "../src/index.js";

const task = "Find the greatest common divisor of given numbers.";

const getTheGreatestCommonDivisor = (firstInteger, secondInteger) => {
  let result = 0;

  for (let i = 1; i <= firstInteger; i += 1) {
    if (firstInteger % i === 0 && secondInteger % i === 0) {
      result = i;
    }
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const firstRandomInteger = getRandomInteger(0, 50);
  const secondRandomInteger = getRandomInteger(0, 50);

  const question = `${firstRandomInteger} ${secondRandomInteger}`;
  const correctAnswer = getTheGreatestCommonDivisor(
    firstRandomInteger,
    secondRandomInteger
  );

  return [question, correctAnswer];
};

export default () => {
  playTheGame(task, getQuestionAndAnswer());
};
