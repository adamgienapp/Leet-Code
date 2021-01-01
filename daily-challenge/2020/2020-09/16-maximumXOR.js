/**
 * PROMPT:
 * Given a non-empty array of numbers, a_0, a_1, a_2, … , a_n-1, where 0 ≤ a_i < 2^31.
 * Find the maximum result of a_i XOR a_j, where 0 ≤ i, j < n.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let largest = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          largest = Math.max(largest, nums[i] ^ nums[j]);
      }
  }
  
  return largest;
};