/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  let num = n;
  while (num > 0) {
    if (num === 1) return true;
    num = num / 3;
  }

  return false;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
