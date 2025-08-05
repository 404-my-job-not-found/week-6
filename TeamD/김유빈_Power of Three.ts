function isPowerOfThree(n: number): boolean {
  if (n < 1) {
    return false;
  }

  // 3의 거듭제곱인지 확인하기 위해 3으로 계속 나누기
  while (n % 3 === 0) {
    n /= 3;
  }

  // 최종적으로 1이 되면 3의 거듭제곱
  return n === 1;
}
