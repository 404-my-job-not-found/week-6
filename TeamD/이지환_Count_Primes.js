/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return count;
};

countPrimes(10);
