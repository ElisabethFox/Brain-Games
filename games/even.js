#!/usr/bin/env node
import { getRandomInteger } from "../src/getRandomInteger.js";
import { playTheGame } from "../src/index.js";
import { isTheIntegerEven } from "../src/isTheIntegerEven.js";

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = isTheIntegerEven(question) ? "yes" : "no";

  return [question, correctAnswer];
};

export default () => {
  playTheGame(task, getQuestionAndAnswer());
};
