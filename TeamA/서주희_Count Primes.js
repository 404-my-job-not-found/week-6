var countPrimes = function (n) {
  // 0 1 2 3 4 5 6 7 8 9
  const primes = Array(n).fill(true);

  primes[0] = primes[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes.filter((item) => item === true).length;
};
