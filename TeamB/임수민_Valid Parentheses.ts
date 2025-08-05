// 괄호가 잘 닫혔는지 판별하는 문제입니다.
// 우선 괄호의 개수가 짝수가 아니면 false를 반환합니다.
// 그 뒤 괄호를 하나씩 확인하면서 열린 괄호는 스택에 추가하고, 닫힌 괄호는 스택에서 마지막 요소를 확인해서 짝이 맞는지 확인합니다.
// 짝이 맞지 않으면 false를 반환하고, 짝이 맞으면 스택에서 마지막 요소를 제거합니다.
// stack에 남는게 없다면 괄호가 잘 닫힌 것이고, 남는게 있다면 괄호가 잘 닫히지 않은 것입니덩

const isValid = (s: string): boolean => {
  if (s.length % 2 !== 0) return false;

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }

    if (char === ")" || char === "]" || char === "}") {
      const last = stack.pop();
      if (last === "(" && char !== ")") return false;
      if (last === "[" && char !== "]") return false;
      if (last === "{" && char !== "}") return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
