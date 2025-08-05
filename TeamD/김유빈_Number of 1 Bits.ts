function hammingWeight(n: number): number {
  let count = 0;

  while (n > 0) {
    // 현재 비트가 1인지 확인
    // n & 1은 n의 최하위 비트를 확인하는 방법
    if (n & 1) {
      count++;
    }

    n >>= 1; // 오른쪽으로 한 비트 이동
  }

  return count;
}
