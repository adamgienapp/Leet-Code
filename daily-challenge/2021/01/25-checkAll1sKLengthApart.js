// PROMPT: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let start = 0;
  while (nums[start] !== 1 && start < nums.length) {
      start++;
  }
  let last = start;
  for (let i = start + 1; i < nums.length; i++) {
      if (nums[i] === 1) {
          if (i - last <= k) return false;
          last = i;
      }
  }
  
  return true;
};