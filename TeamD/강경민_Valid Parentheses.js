/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    
    for (const char of s){
        if(char==='[' || char === '{' || char === '('){
            stack.push(char)
            continue
        }
        
        const head = stack.at(-1);
        
        if (
              (top === '[' && char === ']') ||
              (top === '{' && char === '}') ||
              (top === '(' && char === ')')
            ) {
              stack.pop();
            } else {
              return false;
            }
    }

    return stack.length === 0;
}