/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let result = 0;
  const numToTwo = n.toString(2).split("");

  numToTwo.map((num) => {
    if (num === "1") result++;
  });

  return result;
};

console.log(hammingWeight(11));
console.log(hammingWeight(128));
console.log(hammingWeight(2147483645));
