/**
 * @param {string} s - 검사할 괄호 문자열
 * @return {boolean} - 유효한 괄호 문자열이면 true, 아니면 false
 */
var isValid = function (s) {
  const stack = []; // 여는 괄호들을 저장할 스택

  // 괄호 쌍을 매핑한 객체
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // 문자열을 한 글자씩 순회
  for (let char of s) {
    // 여는 괄호인 경우: 스택에 push
    if (map[char]) {
      stack.push(char);

      // 닫는 괄호인 경우: 스택의 top과 매핑이 되는지 확인
    } else if (stack.length > 0 && map[stack[stack.length - 1]] === char) {
      stack.pop(); // 짝이 맞으면 스택에서 제거

      // 짝이 맞지 않거나 스택이 비어있는데 닫는 괄호가 나온 경우 → invalid
    } else {
      return false;
    }
  }

  // 스택이 비어있으면 모든 괄호가 올바르게 짝지어진 것
  return stack.length === 0;
};
