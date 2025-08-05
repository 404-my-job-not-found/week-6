/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length === 0) return true; // 여기에 추가

    let stack = [];
    const open = ["(", "{", "["];
    const close = [")", "}", "]"];

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) return false; // 스택이 비었는데 닫는 괄호가 나온 경우
            if (close.indexOf(s[i]) === open.indexOf(stack.pop())) {
                continue;
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid("()[]{}"));
