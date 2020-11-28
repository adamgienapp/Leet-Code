// PROMPT: https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (k === 1) return nums;
  
  let maxIdx = [];
  
  let [l,r] = [0,k-1];
  
  for (let i = 1; i < k; i++) {
      if (nums[i] > nums[l]) {
          l = i;
      }
  }
  maxIdx.push(l);
  
  while(r < nums.length - 1) {
      r++;
      if (r - l >= k) {
          l = r - k + 1;
          for (let i = l+1; i < r+1; i++) {
              if (nums[i] >= nums[l]) {
                  l = i;
              }
          }
          maxIdx.push(l);
      } else {
          if (nums[r] >= nums[l]) {
              l = r;
          }
          maxIdx.push(l);
      }
  }
  
  return maxIdx.map(i => nums[i]);
};