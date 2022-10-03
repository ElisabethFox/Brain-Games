const getRandomInteger = (min, max) => {
  const integer = min + Math.random() * (max + 1 - min);
  return Math.floor(integer);
};

export { getRandomInteger };
