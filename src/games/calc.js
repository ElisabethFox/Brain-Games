import getRandomInteger from '../helper.js';
import playTheGame from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getResultOfExpression = (firstOperand, secondOperand, randomOperator) => {
  let result = 0;

  switch(randomOperator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
    break;
  }

  return result;
};

const getQuestionAndAnswer = () => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];
  const firstOperand = getRandomInteger(0, 10);
  const secondOperand = getRandomInteger(0, 10);

  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  const correctAnswer = String(getResultOfExpression(firstOperand, secondOperand, randomOperator));

  return [question, correctAnswer];
};

export default () => {
  playTheGame(description, getQuestionAndAnswer);
};
