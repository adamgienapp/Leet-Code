/**
 * PROMPT:
 * Given an integer array nums, find the contiguous subarray
 * within the array (containing at least one number) which has the largest product.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let currMax = nums[0];
  let currMin = nums[0];
  let max = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
      let temp = currMax;
      currMax = Math.max(currMin*nums[i], currMax*nums[i], nums[i]);
      currMin = Math.min(currMin*nums[i], temp*nums[i], nums[i]);
      max = Math.max(max, currMax);
  }
  
  return max;
};