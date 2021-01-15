// PROMPT: https://leetcode.com/problems/get-maximum-in-generated-array/

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n < 2) return n;
  
  const gen = [0,1];
  let max = 1;
  for (let i = 2; i <= n; i++) {
      let base = Math.floor(i/2);
      if (i % 2 === 0) {
          gen[i] = gen[base];
      } else {
          gen[i] = gen[base] + gen[base+1];
      }
      max = Math.max(max, gen[i]);
  }
  
  return max;
};