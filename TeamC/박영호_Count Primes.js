var countPrimes = function (n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrimeNumber(i)) count++;
  }
  return count;
};

const isPrimeNumber = (n) => {
  if (n <= 1) return false;
  if (n % 2 === 0 && n !== 2) return false;
  if (n % 2 === 0 && n === 2) return true;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};
