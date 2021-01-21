// PROMPT: https://leetcode.com/problems/find-the-most-competitive-subsequence/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
  const stack = [];
  
  for (let i = 0; i < nums.length; i++) {
      while(stack.length && nums[i] < stack[stack.length - 1] && nums.length - 1 - i >= k - stack.length) {
          stack.pop();
      }
      if (stack.length < k) stack.push(nums[i]);
  }
  
  return stack;
};