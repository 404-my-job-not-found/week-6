function isPowerOfThree(n: number): boolean {
  if (n === 0) return false;
  if (n === 1) return true;

  let powered = 3;
  while (powered < n) {
    powered = powered * 3;
  }

  return powered === n;
}
