/**
 * @param {number} n
 * @return {number}
 */

//정답 - 아리..의 체
var countPrimes = function(n) {
    if (n <= 2) return 0;

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


//시도 1
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let primes = 0;
    
    for(let i=0; i<n; i++){
        let result = isPrime(i)
        
        if(result){
            primes++
            continue
        }
    }
    
    return primes
};

function isPrime(n){
    if(n === 1){
        return false
    }
    
    for(let i=2; i<n/2; i++){
        if(n%i === 0 ){
            return false;
        }
    }
    
    return true;
}