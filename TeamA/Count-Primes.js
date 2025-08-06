/**
 * @param {number} n
 * @return {number}
 */

// Brute-Force 방식 - 시간 초과로 실패

var countPrimes = function (n) {
    let count = 0;

    // 2부터 n-1까지 반복하면서 소수인지 검사
    for (let i = 2; i < n; i++) {
        let isPrime = true;

        // 2부터 sqrt(i)까지 나누어떨어지는 수가 있는지 확인
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false; // 나누어떨어지면 소수가 아님
                break; // 더 이상 검사할 필요 없음
            }
        }

        // 소수라면 count 증가
        if (isPrime) {
            count++;
        }
    }

    return count;
};

// 에라토스테네스의 체 방식
// 핵심 포인트 - 현재 숫자가 소수라면 현재 숫자의 배수들은 모두 소수가 아님
var countPrimesII = function (n) {
    if (n < 2) return 0;

    // n 크기의 배열을 true로 초기화 (모든 수가 소수라고 가정)
    const isPrime = new Array(n).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    // 2부터 sqrt(n)까지의 숫자만 검사
    for (let i = 2; i * i < n; i++) {
        // 현재 숫자가 소수라면
        if (isPrime[i]) {
            // i의 배수들은 모두 소수가 아님 => false 처리
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    return isPrime.filter(Boolean).length;
}