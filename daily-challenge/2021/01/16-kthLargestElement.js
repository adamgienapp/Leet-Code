// PROMPT: https://leetcode.com/problems/kth-largest-element-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (k === 1) return Math.max(...nums);
  if (k === nums.length) return Math.min(...nums);
  
  const stack = nums.slice(0, k).sort((a,b) => a - b);
  for (let i = k; i < nums.length; i++) {
      let n = nums[i];
      if (n > stack[0]) {
          let i = 0;
          while (i < stack.length && n > stack[i]) {
              i++;
          }
          if (i === stack.length) stack.push(n);
          else stack.splice(i, 0, n);
          stack.shift();
      }
  }
  
  return stack[0];
};