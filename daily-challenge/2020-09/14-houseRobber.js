/**
 * PROMPT:
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint
 * stopping you from robbing each of them is that adjacent houses have
 * security system connected and it will automatically contact the police
 * if two adjacent houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money
 * of each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  
  let s1 = 0;
  let s2 = 0;
  for (let i = 0; i < nums.length; i++) {
      let prev = s1;
      s1 = Math.max(s1, s2 + nums[i]);
      s2 = prev;
  }
  
  return s1;
};