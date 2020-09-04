/**
 * PROMPT:
 * A string S of lowercase English letters is given.
 * We want to partition this string into as many parts as possible
 * so that each letter appears in at most one part, and return a list
 * of integers representing the size of these parts.
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const pos = {};
  
  for (let i = 0; i < S.length; i++) {
      if (pos[S[i]]) {
          pos[S[i]][1] = i;
      } else {
          pos[S[i]] = [i, i];
      }
  }

  const brackets = Object.values(pos);
  
  const res = [];
  let min = 0, max = brackets[0][1];
  for (let i = 0; i < brackets.length; i++) {
      let [lo, hi] = brackets[i];
      if (lo > max) {
          res.push(max - min + 1);
          min = lo;
          max = hi;
      } else {
          max = Math.max(max, hi);
      }
      if (i === brackets.length - 1) {
          res.push(max - min + 1);
      }
  }

  return res;
};