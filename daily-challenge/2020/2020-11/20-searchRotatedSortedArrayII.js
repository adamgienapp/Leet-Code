//PROMPT: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  let min = 0, max = nums.length - 1;
  let mid = Math.floor((min + max) / 2);
  
  if (nums[nums.length - 1] <= nums[0]) {
      while (mid > min) {
          if (nums[mid] > nums[min]) {
              min = mid;
          } else if (nums[mid] < nums[min]) {
              max = mid;
          } else {
              min++;
          }
          mid = Math.floor((min + max) / 2);
      }
  
      nums = nums.slice(max).concat(nums.slice(0, max));

      [min, max] = [0, nums.length - 1];
      mid = Math.floor((min + max) / 2);
  }
  
  while (min <= max) {
      if (nums[mid] === target) {
          return true;
      }
      if (nums[mid] < target) {
          min = mid + 1;
      }
      if (nums[mid] > target) {
          max = mid - 1;
      }
      mid = Math.floor((min + max) / 2);
  }
  
  return false;
};