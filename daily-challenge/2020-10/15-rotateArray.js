/**
 * PROMPT:
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  if (k === 0) return nums;
  else {
      let count = 0;
      while (count < k) {
          nums.unshift(nums.pop());
          count++;
      }
  }
  return nums;
};