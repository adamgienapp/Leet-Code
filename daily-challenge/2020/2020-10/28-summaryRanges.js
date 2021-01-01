// PROMPT: https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/562/week-4-october-22nd-october-28th/3510/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) return [];
  
  let ranges = [];
  let range;
  let start = nums[0];
  let lastNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] - lastNum === 1) {
          lastNum = nums[i];
      } else {
          range = createRange(start, lastNum);
          ranges.push(range);
          [start, lastNum] = [nums[i], nums[i]];
      }
  }
  range = createRange(start, lastNum);
  ranges.push(range);
  
  return ranges;
};

function createRange(s,e) {
  if (s === e) {
      return `${s}`;
  } else {
      return `${s}->${e}`;
  }
}