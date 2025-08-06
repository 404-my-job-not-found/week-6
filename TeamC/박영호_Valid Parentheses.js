var isValid = function (s) {
  const stack = [];
  if (s.length === 1) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
      continue;
    }
    if (s[i] === ")" && stack.at(-1) === "(") {
      stack.pop();
      continue;
    }
    if (s[i] === "]" && stack.at(-1) === "[") {
      stack.pop();
      continue;
    }
    if (s[i] === "}" && stack.at(-1) === "{") {
      stack.pop();
      continue;
    }
    return false;
  }
  if (stack.length !== 0) return false;
  return true;
};
