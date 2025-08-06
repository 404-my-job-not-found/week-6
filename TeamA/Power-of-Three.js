/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    // 0 이하인 경우는 거듭제곱이 될 수 없음
    if (n < 1) return false;

    // n이 3으로 나누어떨어질 동안 계속 나눔
    while (n % 3 === 0) {
        n = n / 3;
    }

    // 최종적으로 1이면 3의 거듭제곱임
    return n === 1;
};