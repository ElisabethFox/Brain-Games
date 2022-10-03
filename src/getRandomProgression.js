import { getRandomInteger } from "../src/getRandomInteger.js";

const getRandomProgression = (firstElement, progressionStep) => {
  const result = [firstElement];

  for (let i = 1; i < 10; i += 1) {
    result.push(result[i - 1] + progressionStep);
  }

  return result;
};

export { getRandomProgression };
