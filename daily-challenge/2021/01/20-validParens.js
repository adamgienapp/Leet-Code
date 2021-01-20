// PROMPT: https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  
  for (const char of s) {
      if (char === '(') {
          stack.push(')');
      } else if ( char === '[') {
          stack.push(']');
      } else if (char === '{') {
          stack.push('}');   
      } else {
          if (char !== stack.pop()) return false;
      }
  }
  
  return stack.length === 0;
};