/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {
  const ogLen = nums.length;
  for (let i = 0, j = 0; i < ogLen && j < ogLen; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
    }
    if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
      i--;
    }
    j++;
  }
  // return nums;
};
