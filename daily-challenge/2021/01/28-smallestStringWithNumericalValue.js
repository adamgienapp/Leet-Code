// PROMPT: https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let str = '';
  
  while (k > 0) {
      let val = Math.min(k - n + 1, 26);
      str = String.fromCharCode(96 + val) + str;
      k -= val;
      n--;
  }
  
  return str;
};