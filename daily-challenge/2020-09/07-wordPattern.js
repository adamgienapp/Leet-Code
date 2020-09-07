/**
 * PROMPT:
 * Given a pattern and a string str, find if str follows the same pattern.
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const key = {};
  const used = new Set();
  const words = str.split(' ');
  
  if (pattern.length !== words.length) return false;
  
  for (let i = 0; i < words.length; i++) {
      if (key[words[i]]) {
          if (key[words[i]] !== pattern[i]) {
              return false;
          }
      } else {
          if (used.has(pattern[i])) {
              return false;
          } else {
              key[words[i]] = pattern[i];
              used.add(pattern[i]);
          }
      }
  }
  
  return true;
};