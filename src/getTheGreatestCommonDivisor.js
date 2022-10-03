const getTheGreatestCommonDivisor = (firstInteger, secondInteger) => {
  let result = 0;

  for (let i = 1; i <= firstInteger; i += 1) {
    if (firstInteger % i === 0 && secondInteger % i === 0) {
      result = i;
    }
  }

  return result;
};

export { getTheGreatestCommonDivisor };
