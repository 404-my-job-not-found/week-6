var hammingWeight = function (n) {
  let count = 0;

  while (n > 0) {
    const quot = Math.floor(n / 2);
    const remainder = n % 2;
    n = quot;

    if (remainder === 1) {
      count++;
    }
  }

  return count;
};
