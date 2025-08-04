/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      const peek = stack.pop();
      if (
        (char === ")" && peek !== "(") ||
        (char === "}" && peek !== "{") ||
        (char === "]" && peek !== "[")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
};
