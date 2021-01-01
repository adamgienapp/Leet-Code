/**
 * PROMPT: Given an unsorted integer array, find the smallest missing positive integer.
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let minPos = Infinity;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= 0) continue;
      minPos = Math.min(minPos, nums[i]);
  }
  
  if (minPos > 1) return 1;
  else {
      let nextMin = 2;
      for (let i = 0; i < nums.length; i++) {
          if (!nums.includes(nextMin)) {
              return nextMin;
          } else {
              nextMin++;
          }
      }
      return nextMin;
  }
};