function isValid(s: string): boolean {
    const stack: string[] = []; 
    const pairs: Record<string, string> = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
  
    for (const char of s) {
      if (char === '(' || char === '[' || char === '{') {
        // 여는 괄호면 push한다.
        stack.push(char);
      } else {
        // 닫는 괄호면 pop해서 비교한다.
        if (stack.pop() !== pairs[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  