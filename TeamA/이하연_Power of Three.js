/**
 * @param {number} n - 검사할 정수
 * @return {boolean} - n이 3의 거듭제곱이면 true, 아니면 false
 */
var isPowerOfThree = function (n) {
  // 0 이하의 수는 3의 거듭제곱이 될 수 없으므로 false 반환
  if (n <= 0) return false;

  // n이 3으로 나누어 떨어지는 동안 계속해서 3으로 나눔
  while (n % 3 === 0) {
    n /= 3;
  }

  // 최종적으로 n이 1이면 3의 거듭제곱임 (ex: 3^0 = 1)
  return n === 1;
};
