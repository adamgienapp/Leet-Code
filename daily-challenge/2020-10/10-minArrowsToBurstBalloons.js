/**
 * PROMPT:
 * There are some spherical balloons spread in two-dimensional space.
 * For each balloon, provided input is the start and end coordinates of the horizontal diameter.
 * Since it's horizontal, y-coordinates don't matter, and hence the x-coordinates of start and end of the diameter suffice.
 * The start is always smaller than the end.
 * 
 * An arrow can be shot up exactly vertically from different points along the x-axis.
 * A balloon with x_start and x_end bursts by an arrow shot at x if x_start ≤ x ≤ x_end.
 * There is no limit to the number of arrows that can be shot.
 * An arrow once shot keeps traveling up infinitely.
 * 
 * Given an array points where points[i] = [x_start, x_end],
 * return the minimum number of arrows that must be shot to burst all balloons.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (points.length <= 1) return points.length;
  
  points.sort((a,b) => a[1] - b[1]);
  
  let arrows = 1;
  let max = points[0][1];
  for (let i = 1; i < points.length; i++) {
      let [lo, hi] = points[i];
      if (max < lo) {
          arrows++;
          max = hi;
      }
  }
  
  return arrows;
};