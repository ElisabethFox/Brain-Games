const getRandomInteger = (min = 0, max = 10) => {
  const integer = min + Math.random() * (max + 1 - min);
  return Math.floor(integer);
};

export { getRandomInteger };
