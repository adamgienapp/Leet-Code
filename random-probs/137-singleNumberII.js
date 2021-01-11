// https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const seenOnce = new Set();
  const seenMore = new Set();
  
  for (const num of nums) {
      if (seenOnce.has(num)) {
          seenMore.add(num);
          seenOnce.delete(num);
      } else if (seenMore.has(num)) {
          continue;
      } else {
          seenOnce.add(num);
      }
  }
  
  return [...seenOnce][0];
};