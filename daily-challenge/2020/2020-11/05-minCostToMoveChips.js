// PROMPT: https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let [even, odd] = [0, 0];
  for (let i of position) {
      if (i % 2) {
          odd++;
      } else {
          even++;
      }
  }
  
  return Math.min(even, odd);
};