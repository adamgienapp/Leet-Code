// PROMPT: https://leetcode.com/problems/partition-equal-subset-sum/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  if (nums.length < 2) return false;
  
  let total = nums.reduce((a,b) => a + b, 0);
  if (total % 2) {
      return false;
  }
  
  let target = total / 2;
  let dp = new Array(target+1).fill(false);
  dp[0] = true;
  
  for (let num of nums) {
      for (let i = target - num; i >= 0; i--) {
          if (dp[i]) {
              dp[i + num] = true;
          }
      }
  }
  
  return dp[target];
};