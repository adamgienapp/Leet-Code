// PROMPT: https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let out = '';
  
  for (let i = 0; i < s.length; i++) {
      if (Number.isInteger(+s[i])) {
          let k = '';
          while(Number.isInteger(+s[i])) {
              k += s[i];
              i++;
          }
          i++;
          let sub = '';
          let queue = [']'];
          while(queue.length) {
              if (s[i] === '[') {
                  queue.push(']');
              } else if (s[i] === ']') {
                  queue.pop();
                  if (!queue.length) continue;
              }
              sub += s[i];
              i++;
          }
          out += decodeString(sub).repeat(parseInt(k));
      } else {
          out += s[i];
      }
  }
  
  return out;
};