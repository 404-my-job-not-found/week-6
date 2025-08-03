function countPrimes(n: number): number {
	if (n < 2) return 0

	const isPrime = new Array(n).fill(true)
	isPrime[0] = false
	isPrime[1] = false

	for (let i = 2; i * i < n; i++) {
		if (isPrime[i]) {
			console.log(`소수 발견: ${i}`)
			for (let j = i * i; j < n; j += i) {
				if (isPrime[j]) console.log(`-> ${j}는 ${i}의 배수니까 제거`)
				isPrime[j] = false
			}
			console.log(
				`중간 결과: ${isPrime.map((v, idx) => (v ? idx : ".")).join(" ")}`
			)
		}
	}

	return isPrime.filter(Boolean).length
}

// use Algorithm: Sieve of Eratosthenes
// Time Complexity: O(n log log n)
// Space Complexity: O(n)
