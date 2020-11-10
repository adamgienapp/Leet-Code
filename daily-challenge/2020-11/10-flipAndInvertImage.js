// PROMPT: https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map(sub => sub.reverse().map(x => { return x === 1 ? 0 : 1; }));
};