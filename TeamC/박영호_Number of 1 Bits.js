var hammingWeight = function (n) {
  return decimalToBinary(n).split(1).length - 1;
};

const decimalToBinary = (n) => {
  return (n >>> 0).toString(2);
};
