/**
 * @param {number} n
 * @return {number}
 */
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

var countPrimes = function (n) {
  let count = 0;
  if (n === 0 || n === 1) return count;

  for (i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }

  return count;
};

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
