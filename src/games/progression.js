import getRandomInteger from '../helper.js';
import playTheGame from '../index.js';

const progressionElementCount = 10;

const getRandomProgression = (firstElement, progressionStep) => {
  const result = [firstElement];

  for (let i = 1; i < progressionElementCount; i += 1) {
    result.push(result[i - 1] + progressionStep);
  }
  return result;
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const firstElement = getRandomInteger(1, 10);
  const progressionStep = getRandomInteger(1, 5);
  const randomProgression = getRandomProgression(firstElement, progressionStep);
  const indexOfMissingElement = getRandomInteger(0, (progressionElementCount - 1));

  const correctAnswer = String(randomProgression[indexOfMissingElement]);
  randomProgression[indexOfMissingElement] = '..';
  const question = `${randomProgression.join(' ')}`;

  return [question, correctAnswer];
};

export default () => {
  playTheGame(description, getQuestionAndAnswer);
};
