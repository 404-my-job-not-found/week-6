// 소수를 구하는 문제입니다.
// 소수란 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수입니다.

// 첫 번째 시도
// 1 ~ n 까지의 수를 배열로 만든 뒤 요소들을 각각 소수인지 판별하는 방식으로 작성하려고 했습니다.
// (1*10), (2*5), 제곱근, (5*2), (10*1) 이렇게 제곱 근을 기준으로 대칭이기 때문에 제곱근 이하만 판별하면 될 것 같습니다.
// 1은 소수가 아니기 때문에 1을 제외하고 n보다 작은 수니 -1 해줍니다.
// 그 뒤 요소들을 각각 소수인지 판별하는 방식으로 작성했습니다.
// 691731인 케이스에서 Submission Result: Time Limit Exceeded 타임에러가 났습니다..

// const countPrimes = (n: number): number => {
//   const nums = Array.from({ length: n - 1 }, (_, i) => i + 1);

//   return nums.filter(v => {
//     if (v <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(v); i++) {
//       if (v % i === 0) return false;
//     }

//     return true;
//   }).length;
// };

// 두 번째 시도
// 배열을 포기할 수 없기 때문에 따로 함수를 작성해봤습니다.
// 691731는 통과하지만 709486은 타임에러가 났습니다.
// 배열 말고는 떠오르는 방법이 없었습니다..

// const countPrimes = (n: number): number => {
//   const isPrime = (num: number): boolean => {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }

//     return true;
//   };

//   return Array.from({ length: n - 1 }, (_, i) => i + 1).filter(isPrime).length;
// };

// 세 번째 시도
// 배열을 사용하지 않고 반복문을 사용하여 소수를 구하는 방식으로 작성했습니다.
// 이제는 1000000도 타임에러가 납니다..
// const countPrimes = (n: number): number => {
//   const isPrime = (num: number): boolean => {
//     if (num <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }

//     return true;
//   };

//   let count = 0;

//   for (let i = 2; i < n; i++) {
//     if (isPrime(i)) count++;
//   }

//   return count;
// };

// 네 번째 시도
// 소수를 구하는 방식을 찾아보았습니다.
// 소수를 구하는 방식은 2부터 제곱근까지 나누어 떨어지는 수가 있는지 판별하는 방식입니다.
// 이 방식을 사용하여 소수를 구하는 방식으로 작성했습니다.
const countPrimes = (n: number): number => {
  return 0;
};

console.log(countPrimes(691731));
console.log(countPrimes(10));
console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(5));
