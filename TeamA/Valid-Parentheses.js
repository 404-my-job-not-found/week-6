/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 짝이 맞는 괄호 매핑 맵 정의
    const mapping = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    // Stack 선언
    const stack = [];
    // 길이가 1이거나 첫번째 인덱스 괄호가 닫는 괄호면 false
    if (s.length === 1) return false;
    if (s[0] === ")" || s[0] === "]" || s[0] === "}") return false;

    for (i = 0; i < s.length; i++) {
        // 닫는 괄호 차례에서는 stack에서 하나를 꺼내 mapping에서 비교
        if (stack.length > 0 && (s[i] === ")" || s[i] === "]" || s[i] === "}")) {
            const targetParent = stack.pop();
            if (mapping[targetParent] !== s[i]) return false;
            // 여는 괄호가 오면 우선 stack에 저장
        } else {
            stack.push(s[i]);
        }
    }
    // 최종적으로 모두 짝이 맞다면 stack의 길이는 0이어야 함
    return stack.length === 0;
};