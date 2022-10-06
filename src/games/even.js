import { getRandomInteger } from '../helper.js';
import { playTheGame } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  playTheGame(task, getQuestionAndAnswer);
};
