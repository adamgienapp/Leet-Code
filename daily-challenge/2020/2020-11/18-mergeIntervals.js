// PROMPT: https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length < 2) return intervals;
  
  intervals.sort((a,b) => {
      if (a[0] === b[0]) {
          return a[1] - b[1];
      } else {
          return a[0] - b[0];
      }
  });
  
  const merged = [intervals[0]];
    
  for (let i = 1; i < intervals.length; i++) {
      const curr = intervals[i];
      const check = merged[merged.length - 1];
      if (check[1] >= curr[0]) {
          check[1] = Math.max(check[1], curr[1]);
      } else {
          merged.push(curr);
      }
  }
  
  return merged;
};