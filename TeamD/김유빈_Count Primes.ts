function countPrimes(n: number): number {
  if (n < 2) {
    return 0;
  }

  const isPrime = new Array(n).fill(true);
  // 0과 1은 소수가 아니므로 false로 설정
  isPrime[0] = isPrime[1] = false;

  // 소수 판별을 위한 에라토스테네스의 체
  // 2부터 n의 제곱근까지 반복하며 소수인 경우 그 배수들을 false로 설정
  for (let i = 2; i * i < n; i++) {
    // 현재 숫자가 소수인 경우
    if (isPrime[i]) {
      // i의 배수들을 소수가 아니라고 표시
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // 소수의 개수를 세어 반환
  // isPrime 배열에서 true인 값의 개수를 세어 반환
  return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
}
