var isPowerOfThree = function (n) {
  let current = 1;

  while (current < n) {
    current *= 3;
  }

  return current === n;
};
