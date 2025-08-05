function isPrime(num: number): boolean {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(n: number): number {
  if (n < 2) return 0;

  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}
// 위 방법은 isPrime함수가 모든 수를 하나씩 판별하기에 입력 n이 커질수록 연산량이 커진다...!
// 해결 방법은 에라토스테네스의 체를 이용하는 것이다.

function countPrimesEratosthenes(n: number): number {
  if (n < 2) return 0;

  const isPrime = new Array(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false; // 0과 1은 소수가 아님

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  //소수 갯수
  return isPrime.filter(Boolean).length;
}
