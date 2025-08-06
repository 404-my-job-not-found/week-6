/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    return n.toString(2).split('').filter(bit => bit === '1').length;
};

// 추가: 비트 연산자 풀이 (면접 질문 가능) - 
// & => 비트 AND : 두 수를 2진수로 변환해서, 각 자리 별로 둘 다 1이면 1, 아니면 0으로 계산하는 연산자
var hammingWeightII = function (n) {
    let count = 0;
    while (n !== 0) {
        n &= (n - 1); // 가장 오른쪽에 1 비트를 0으로 만든다
        count++;
    }
    return count;
};

//반복	n (이진수)	n - 1	n & (n - 1)	count
// 1	1101	  1100	  1100	      1
// 2	1100	  1011	  1000	      2
// 3	1000	  0111	  0000	      3

// n & (n - 1) 연산을 하면 가장 오른쪽에 있는 1비트를 없앨 수 있음
// 이 연산을 반복할 때마다 1이 하나씩 줄어들게 되고
// n이 0이 될 때까지 이 과정을 반복하면서 몇 번 반복했는지를 세면 '1' 비트의 개수를 셀 수 있음