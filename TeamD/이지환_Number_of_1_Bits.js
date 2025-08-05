/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    // console.log("이진수: ", n.toString(2));

    // console.log(n & (n - 1));
    // let k = n & (n - 1);
    // let aa = (k & (k - 1)).toString(2);
    // console.log("수정 후 이진수: ", aa);

    // console.log(aa & (aa - 1));

    // console.log(12 & 11);
    // console.log(8 & 7);

    let count = 0;
    while (n > 0) {
        n = n & (n - 1);
        count++;
    }
    console.log(count);

    return count;
};

hammingWeight(12);
