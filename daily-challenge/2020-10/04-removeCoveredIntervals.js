/**
 * PROMPT:
 * Given a list of intervals, remove all intervals that are covered by another interval in the list.
 * Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
 * After doing so, return the number of remaining intervals.
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals.sort((a,b) => {
      if (a[0] === b[0]) {
          return a[1] - b[1];
      } else {
          return a[0] - b[0];
      }
  });
  
  let [l, r, removed] = [0, 1, 0];
  while (r < intervals.length) {
      let [a, b] = [intervals[l], intervals[r]];
      
      if (a[0] === b[0]) {
          removed++;
          l = r++;
      } else if (b[1] <= a[1]) {
          removed++;
          r++;
      } else {
          l = r++;
      }
  }
  
  return intervals.length - removed;
};