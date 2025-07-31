/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const splited = s.split("");

  for (let s of splited) {
    if (stack[stack.length - 1] === "(" && s === ")") {
      stack.pop();
    } else if (stack[stack.length - 1] === "[" && s === "]") {
      stack.pop();
    } else if (stack[stack.length - 1] === "{" && s === "}") {
      stack.pop();
    } else {
      stack.push(s);
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([)]")); // false
