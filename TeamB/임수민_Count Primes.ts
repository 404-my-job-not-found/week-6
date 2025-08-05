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
// 에라토스네네스의 체 알고리즘을 썼습니다.
// 배열 자체를 boolean 값으로 초기화하고, 0과 1은 소수가 아니기 때문에 false로 초기화해줍니다.
// i*i < n 은 i < √n 과 같은 걸 표현한것이고, 2부터 n의 제곱근까지 판별하고 j는 i의 제곱부터 n까지 i씩 증가하면서 false로 치환해줍니다.
// 예를 들어 n = 30 일때, i = 2 일때 j = 4 부터 30까지 2씩 증가하면서 false로 치환하고,
// 그 뒤 i = 3 일때 j = 9 부터 30까지 3씩 증가하면서 false로 치환하고,
// i = 4 일때는 이미 제거되었기 때문에 건너뛰고
// i = 5 일때는 5의 배수들을 제거하고, 이런식으로 i*i < n 까지 반복합니다.
// 결국 이런 식으로 걸러지고 나면 소수들만 true로 남게 되고, 시간 복잡도도 줄어들게 됩니다.

// === n = 30인 경우 ===

// --- 체 거르기 시작 ---

// i = 2 확인 (2 * 2 = 4 < 30? true)
//   2는 소수! 2의 배수들을 제거
//     4 제거 (2 × 2 = 4)
//     6 제거 (2 × 3 = 6)
//     8 제거 (2 × 4 = 8)
//     10 제거 (2 × 5 = 10)
//     12 제거 (2 × 6 = 12)
//     14 제거 (2 × 7 = 14)
//     16 제거 (2 × 8 = 16)
//     18 제거 (2 × 9 = 18)

// i = 3 확인 (3 * 3 = 9 < 30? true)
//   3는 소수! 3의 배수들을 제거
//     9 제거 (3 × 3 = 9)
//     12 제거 (3 × 4 = 12)
//     15 제거 (3 × 5 = 15)
//     18 제거 (3 × 6 = 18)

// i = 4 확인 (4 * 4 = 16 < 30? true)
//   4는 이미 제거됨, 건너뜀

// i = 5 확인 (5 * 5 = 25 < 30? true)
//   5는 소수! 5의 배수들을 제거
//     25 제거 (5 × 5 = 25)

// 소수들: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
// 소수 개수: 10

// 마지막으로 필터링해주고 소수의 개수를 반환합니다.
// 디버깅 코드도 추가했으니 확인해도 좋을 것 같습니다.

const countPrimes = (n: number): number => {
  const isPrime = new Array(n).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
};

const countPrimesDebug = (n: number): number => {
  console.log(`\n=== n = ${n}인 경우 ===`);

  const isPrime = new Array(n).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  console.log("\n--- 체 거르기 시작 ---");
  for (let i = 2; i * i < n; i++) {
    console.log(`\ni = ${i} 확인 (${i} * ${i} = ${i * i} < ${n}? ${i * i < n})`);

    if (isPrime[i]) {
      console.log(`  ${i}는 소수! ${i}의 배수들을 제거`);

      for (let j = i * i; j < n; j += i) {
        console.log(`    ${j} 제거 (${i} × ${j / i} = ${j})`);
        isPrime[j] = false;
      }
    } else {
      console.log(`  ${i}는 이미 제거됨, 건너뜀`);
    }
  }

  const result = isPrime.filter(Boolean).length;
  const primes: number[] = [];
  for (let i = 0; i < n; i++) {
    if (isPrime[i]) primes.push(i);
  }

  console.log("소수들:", primes.join(", "));
  console.log("소수 개수:", result);

  return result;
};

console.log(countPrimesDebug(30));

console.log(countPrimes(691731));
console.log(countPrimes(10));
console.log(countPrimes(2));
console.log(countPrimes(3));
console.log(countPrimes(5));
