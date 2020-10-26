// PROMPT: https://leetcode.com/problems/champagne-tower/

/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
  if (query_glass < 0 || query_glass > query_row) return 0;
  
  let dp = [poured];
  let row = 1;
  while (row <= query_row) {
      let nextRow = new Array(row + 1).fill(0);
      for (let i = 0; i < dp.length; i++) {
          let overflow = Math.max(dp[i] - 1, 0);
          nextRow[i] += overflow / 2;
          nextRow[i+1] += overflow / 2;
      }
      dp = nextRow;
      row++;
  }

  return dp[query_glass] > 1 ? 1 : dp[query_glass];
};