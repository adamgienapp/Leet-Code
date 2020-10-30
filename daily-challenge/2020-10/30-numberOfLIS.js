// PROMPT: https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/563/week-5-october-29th-october-31st/3513/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  if (nums.length <= 1) return nums.length;
    
  const dp = new Array(nums.length).fill(1);
  const counts = new Array(nums.length).fill(1);
    
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        if (dp[j] + 1 === dp[i]) {
          counts[i] += counts[j];
        } else if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        }
      }
    }
  }
    
  let maxLen = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (dp[i] > maxLen) {
      maxLen = dp[i];
      maxCount = counts[i];
    } else if (dp[i] === maxLen) {
      maxCount += counts[i];
    }
  }
  return maxCount;
};