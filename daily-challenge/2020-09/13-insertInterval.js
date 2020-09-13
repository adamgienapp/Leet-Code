/**
 * PROMPT:
 * Given a set of non-overlapping intervals, insert a new interval
 * into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// Low space, bad runtime
var insert = function(intervals, newInterval) {
  // edge cases
  if (!intervals.length) {
      return [newInterval];
  }
  const nStart = newInterval[0];
  const nEnd = newInterval[1];
  if (nEnd < intervals[0][0]) {
      return [newInterval, ...intervals];
  }
  if (nStart > intervals[intervals.length - 1][1]) {
      return [...intervals, newInterval];
  }
  
  let output = [];
  let merge = [];
  let merging = false;
  let merged = false;
  while (intervals.length) {
      let curr = intervals.shift();
      if (merging) {
          if (merge[1] >= curr[0]) {
              merge[1] = Math.max(merge[1], curr[1]);
              if (!intervals.length) {
                  output.push(merge);
              }
          } else {
              merging = false;
              merged = true;
              output.push(merge);
              output.push(curr);
          }
      } else if (merged) {
          output.push(curr);
      } else {
          if (nStart <= curr[1]) {
              if (nEnd >= curr[0]) {
                  merge = [Math.min(nStart, curr[0]), Math.max(nEnd, curr[1])];
                  if (!intervals.length) {
                      output.push(merge);
                  }
                  merging = true;
              } else {
                  output.push(newInterval);
                  output.push(curr);
                  merged = true;
              }
          } else {
              output.push(curr);
          }
      }
  }
  
  return output;
};