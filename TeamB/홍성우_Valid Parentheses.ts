function isValid(s: string): boolean {
  const result: string[] = [];

  s.split("").forEach((item) => {
    if (item === "(" || item === "{" || item === "[") {
      result.push(item);
    }
    if (
      (item === ")" && result[result.length - 1] === "(") ||
      (item === "}" && result[result.length - 1] === "{") ||
      (item === "]" && result[result.length - 1] === "[")
    ) {
      result.pop();
    }
  });

  return result.length === 0;
}
