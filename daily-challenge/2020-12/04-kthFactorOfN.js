// PROMPT: https://leetcode.com/problems/the-kth-factor-of-n/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
  let factors = [1];
  for (let i = 2; i <= n && factors.length < k; i++) {
      if (n % i === 0) factors.push(i);
  }
  
  return factors.length === k ? factors[k-1] : -1;
};