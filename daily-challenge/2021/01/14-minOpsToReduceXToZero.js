// PROMPT: https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
  const sum = nums.reduce((a,b) => a + b, 0);
  const target = sum - x;
  
  let [l, r] = [0, 0];
  let currSum = 0;
  let maxLen = -1;
  
  while (r < nums.length) {
      currSum += nums[r];
      while (currSum >= target && l < nums.length) {
          if (currSum === target) {
              maxLen = Math.max(maxLen, r - l + 1);
          }
          currSum -= nums[l++];
      }
      r++;
  }
  
  return maxLen === -1 ? -1 : nums.length - maxLen;
};