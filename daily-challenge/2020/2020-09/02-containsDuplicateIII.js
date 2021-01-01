/**
 * PROMPT:
 * Given an array of integers, find out whether there are
 * two distinct indices i and j in the array such that
 * the absolute difference between nums[i] and nums[j] is at most t
 * and the absolute difference between i and j is at most k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i+1; j <= i+k && j < nums.length; j++) {
          if (Math.abs(nums[i] - nums[j]) <= t) {
              return true;
          }
      }
  }
  
  return false;
};