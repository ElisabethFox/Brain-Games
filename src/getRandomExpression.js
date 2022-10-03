import { getRandomInteger } from "../src/getRandomInteger.js";

const getRandomExpression = (operators = ["+", "-", "*"]) => {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomIndex];

  return `${getRandomInteger(0, 10)} ${randomOperator} ${getRandomInteger(
    0,
    10
  )}`;
};

const resultOfExpression = (expression) => {
  const elements = expression.split(" ");
  let result = Number(elements[0]);

  switch (elements[1]) {
    case "+":
      result += Number(elements[2]);
      break;
    case "-":
      result -= Number(elements[2]);
      break;
    default:
      result *= Number(elements[2]);
  }

  return result;
};

export { getRandomExpression, resultOfExpression };
