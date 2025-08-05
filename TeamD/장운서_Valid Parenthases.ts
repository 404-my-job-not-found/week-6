function isValid(s: string): boolean {
	const stack: string[] = []
	const map = {
		")": "(",
		"]": "[",
		"}": "{",
	}

	for (const char of s) {
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char)

			console.log(char)
		} else {
			if (stack.pop() !== map[char]) {
				return false
			}
		}
	}

	return stack.length === 0
}

isValid("([])")

// Output: true
export {}
// Explanation: The input string is valid because all parentheses are closed in the correct order.
