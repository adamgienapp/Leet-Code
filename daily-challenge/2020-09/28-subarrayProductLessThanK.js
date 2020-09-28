/**
 * PROMPT:
 * Your are given an array of positive integers nums.
 * 
 * Return the number of (contiguous) subarrays where
 * the product of all the elements in the subarray is less than k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let count = 0;
  
  let curr = 1;
  let s = 0;
  
  for (let i = 0; i < nums.length; i++) {
      curr *= nums[i];
      while (curr >= k && s < i) {
          curr /= nums[s];
          s++;
      }
      if (curr < k) {
          count += (i - s + 1);
      }
  }
  
  return count;
};