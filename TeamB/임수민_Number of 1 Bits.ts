// 1의 개수를 세는 문제입니다.
// n을 2진수로 변환하고, 그 2진수를 배열로 만들어서 1의 개수를 세는 방식으로 풀었습니다.

const hammingWeight = (n: number): number => [...n.toString(2)].filter(v => v === "1").length;
