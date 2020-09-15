/**
 * PROMPT:
 * Given a string s consists of upper/lower-case alphabets
 * and empty space characters ' ', return the length of last word.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s.length) return 0;
  
  return s.trim().split(' ').pop().length;
};