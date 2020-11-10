// PROMPT: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  let [min, max] = [Math.ceil(nums[nums.length-1] / threshold), nums[nums.length-1]];
  let res = max;
  
  const computeTotal = (x) => nums.reduce((a,b) => a + Math.ceil(b / x), 0);
  
  while (min <= max) {
      let mid = Math.floor((min+max)/2);
      let total = computeTotal(mid);
      if (total <= threshold) {
          res = Math.min(res, mid);
          max = mid - 1;
      } else {
          min = mid + 1;
      }
  }
  
  return res;
};