/**
 * @param {number} n - 소수를 구하고자 하는 상한값 (n보다 작은 수 중 소수를 찾음)
 * @return {number} - n보다 작은 소수의 개수
 */
// 주어진 정수 n보다 작은 소수의 개수를 반환하는 함수
// 에라토스테네스의 체(Sieve of Eratosthenes) 알고리즘
var countPrimes = function (n) {
  // n이 2 이하일 경우 소수는 존재하지 않으므로 0을 반환
  if (n <= 2) return 0;

  // 길이가 n인 배열을 true로 초기화 (인덱스 i가 소수인지 여부를 나타냄)
  const isPrime = new Array(n).fill(true);

  // 0과 1은 소수가 아니므로 false로 설정
  isPrime[0] = false;
  isPrime[1] = false;

  // 에라토스테네스의 체 알고리즘
  // i * i < n까지만 반복하면 충분 (i보다 작은 수에서 이미 거름)
  for (let i = 2; i * i < n; i++) {
    // i가 소수일 경우에만 진행
    if (isPrime[i]) {
      // i의 배수는 모두 소수가 아니므로 false로 설정
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // true로 남아있는 인덱스의 개수를 세어 반환 (소수의 개수)
  return isPrime.filter(Boolean).length;
};
