// PROMPT: https://leetcode.com/problems/max-number-of-k-sum-pairs/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let ops = 0;
  
  const seen = new Map();
  for (const num of nums) {
      if (seen.get(k - num)) {
          seen.set(k - num, seen.get(k - num) - 1);
          ops++;
      } else {
          seen.set(num, (seen.get(num) || 0) + 1);
      }
  }
  
  return ops;
};