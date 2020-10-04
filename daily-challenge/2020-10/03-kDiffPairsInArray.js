/**
 * PROMPT:
 * Given an array of integers nums and an integer k,
 * return the number of unique k-diff pairs in the array.
 * 
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 *    0 <= i, j < nums.length
 *    i != j
 *    a <= b
 *    b - a == k
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let positions = [];
  let min = 0;
  
  for (let i = 0; i < nums.length; i++) {
      positions[nums[i]] = ++positions[nums[i]] || 1;
      min = Math.min(min, nums[i]);
  }
  
  let pairs = 0;
  for (let i = min; i < positions.length; i++) {
      if (k === 0) {
          if (positions[i] > 1) {
              pairs++;
          }
      } else {
          if (positions[i] && positions[i + k]) {
              pairs++;
          }
      }
  }
  
  return pairs;
};