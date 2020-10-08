/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  
  while (min <= max) {
      let mid = Math.floor((min + max) / 2);
      
      if (nums[mid] === target) {
          return mid;
      }
      if (nums[mid] > target) {
          max = mid - 1;
      }
      if (nums[mid] < target) {
          min = mid + 1;
      }
  }
  
  return -1;
};