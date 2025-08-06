function hammingWeight(n: number): number {
  let oneCnt = 0;
  while(n > 2) {
      oneCnt += n % 2;
      n = Math.floor(n / 2);
  }
  return oneCnt + 1; // 1(1)이나 2(10)나 모두 1이 하나 추가됨
};