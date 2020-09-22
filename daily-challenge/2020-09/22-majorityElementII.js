/**
 * PROMPT:
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 * Note: The algorithm should run in linear time and in O(1) space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  const result = [];
  
  let num1 = Infinity, num2 = -Infinity, count1 = 0, count2 = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (num1 === nums[i]) {
          count1++;
      } else if (num2 === nums[i]) {
          count2++;
      } else if (count1 === 0) {
          num1 = nums[i];
          count1 = 1;
      } else if (count2 === 0) {
          num2 = nums[i];
          count2 = 1;
      } else {
          count1--;
          count2--;
      }
  }
  
  [count1, count2] = [0,0];
  for (const num of nums) {
      if (num === num1) count1++;
      if (num === num2) count2++;
  }
  
  if (count1 > nums.length / 3) result.push(num1);
  if (count2 > nums.length / 3) result.push(num2);
  
  return result;
};