const isOpenningBracket = (char: string): boolean => {
  return char === '(' || char === '{' || char === '[';
}

function isValid(s: string): boolean {
  const bracketStacks: string[] = [];
  for(let i=0; i<s.length; i++) {
      if (isOpenningBracket(s[i])) {
          bracketStacks.push(s[i]);
      } else {
          if (bracketStacks.length === 0) return false;
          const lastOpeningBracket = bracketStacks.pop();

          if (s[i] === ')' && lastOpeningBracket !== '(') return false;
          if (s[i] === '}' && lastOpeningBracket !== '{') return false;
          if (s[i] === ']' && lastOpeningBracket !== '[') return false;
      }
  }
  return bracketStacks.length === 0;
};