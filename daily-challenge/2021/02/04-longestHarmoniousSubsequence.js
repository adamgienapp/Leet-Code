// https://leetcode.com/problems/longest-harmonious-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const dist = new Map();
  
  for (const num of nums) {
      dist.set(num, (dist.get(num) || 0) + 1);
  }
  
  let longest = 0;
  for (const num of nums) {
      if (dist.has(num + 1)) {
          longest = Math.max(longest, dist.get(num) + dist.get(num + 1));
      }
  }
  
  return longest;
};