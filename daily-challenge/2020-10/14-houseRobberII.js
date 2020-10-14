/**
 * PROMPT:
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed.
 * All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one.
 * Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * 
 * Given a list of non-negative integers nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) {
      return nums[0];
  }
  
  let s0 = new Array(nums.length).fill(0);
  s0[1] = nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
      s0[i+1] = Math.max(s0[i], nums[i] + s0[i - 1]);
  }
  
  let s1 = new Array(nums.length).fill(0);
  s1[1] = nums[1];
  for (let i = 2; i < nums.length; i++) {
      s1[i] = Math.max(s1[i-1], nums[i] + s1[i - 2]);
  }
  
  return Math.max(s0[s0.length - 1], s1[s1.length - 1]);
};