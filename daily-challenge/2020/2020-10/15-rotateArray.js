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


// Popular / A+ turbo-nerd solution
var rotate = function(nums, k) {
  k = k % nums.length;

  flip(nums, 0, nums.length - 1);
  flip(nums, 0, k - 1);
  flip(nums, k, nums.length - 1);
};

const flip = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};