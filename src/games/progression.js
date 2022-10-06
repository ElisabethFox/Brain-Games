import { getRandomInteger } from '../helper.js';
import { playTheGame } from '../index.js';

const getRandomProgression = (firstElement, progressionStep) => {
  const result = [firstElement];

  for (let i = 1; i < 10; i += 1) {
    result.push(result[i - 1] + progressionStep);
  }
  return result;
};

const task = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const randomProgression = getRandomProgression(
    getRandomInteger(1, 10),
    getRandomInteger(1, 5)
  );
  const indexOfMissingElement = getRandomInteger(0, 9);

  const correctAnswer = String(randomProgression[indexOfMissingElement]);
  randomProgression[indexOfMissingElement] = '..';
  const question = `${randomProgression.join(' ')}`;

  return [question, correctAnswer];
};

export default () => {
  playTheGame(task, getQuestionAndAnswer);
};
