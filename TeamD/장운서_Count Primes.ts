function countPrimes(n: number): number {
	if (n < 2) return 0

	const isPrime = new Array(n).fill(true)
	isPrime[0] = false
	isPrime[1] = false

	for (let i = 2; i * i < n; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j < n; j += i) {
				isPrime[j] = false
			}
		}
	}

	return isPrime.filter(Boolean).length
}

// use Algorithm: Sieve of Eratosthenes
// Time Complexity: O(n log log n)
// Space Complexity: O(n)
