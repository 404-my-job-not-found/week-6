function isValid(s: string): boolean {
  if (s.length % 2 !== 0) {
    return false; // 홀수 길이는 유효하지 않음
  }

  const stack: string[] = [];

  const matchingBrackets: { [key: string]: string } = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char in matchingBrackets) {
      const top = stack.pop();
      // 스택이 비어있거나, 현재 닫는 괄호와 스택의 최상위 괄호가 일치하지 않으면 유효하지 않음
      if (top !== matchingBrackets[char]) {
        return false;
      }
    } else {
      // 여는 괄호는 스택에 추가
      stack.push(char);
    }
  }

  // 스택이 비어있으면 모든 괄호가 올바르게 닫혔음
  return stack.length === 0;
}
