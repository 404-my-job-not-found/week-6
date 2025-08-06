/**
 * @param {number} n - 부호 없는 32비트 정수
 * @return {number} - 이진수에서 1의 개수
 */
// 주어진 정수 n의 이진 표현에서 1의 개수를 반환
var hammingWeight = function (n) {
  let count = 0; // 1의 개수를 저장할 변수

  // n이 0이 될 때까지 반복
  while (n !== 0) {
    // 현재 비트가 1인지 확인 (n의 마지막 비트와 1을 AND 연산)
    count += n & 1;

    // 부호 없는 오른쪽 시프트 (>>>)
    // n의 비트를 오른쪽으로 1칸 이동 (최상위 비트에 0이 채워짐)
    n = n >>> 1;
  }

  // 1의 개수 반환
  return count;
};
