// 3의 거듭제곱인지 판별하는 문제입니다.
// 우선 음수일 경우는 3의 거듭제곱이 아니기 때문에 false를 반환하고,
// 1일 경우는 3의 0제곱이기 때문에 true를 반환합니다.
// result는 n을 3으로 나눈 값을 저장하고, (n/2)의 제곱근까지 반복합니다.
// 반복하면서 result가 1이 되면 true를 반환하고, 1이 되지 않으면 false를 반환합니다.

const isPowerOfThree = (n: number): boolean => {
  if (n < 0) return false;
  if (n === 1) return true;

  let result = n;

  for (let i = 1; i < Math.sqrt(n / 2); i++) {
    result = result / 3;
    if (result === 1) {
      return true;
    }
  }
  return false;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(1));
