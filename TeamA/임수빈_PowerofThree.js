/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function (n) {
  for (let i = 0; i < Math.sqrt(n); i++) {
    if (Math.pow(3, i) === n) {
      return true;
    }
  }

  return false;
};
