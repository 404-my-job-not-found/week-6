function hammingWeight(n: number): number {
  let count = 0;
  while (n > 0) {
    //마지막 비트가 1인지 확인한다.
    if (n & 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
}
