/**
 * PROMPT:
 * In a country popular for train travel, you have planned some train
 * travelling one year in advance.  The days of the year that you will
 * travel is given as an array days.  Each day is an integer from 1 to 365.
 * 
 * Train tickets are sold in 3 different ways:
 *  a 1-day pass is sold for costs[0] dollars;
 *  a 7-day pass is sold for costs[1] dollars;
 *  a 30-day pass is sold for costs[2] dollars.
 * 
 * The passes allow that many days of consecutive travel.
 * For example, if we get a 7-day pass on day 2, then we can travel for 7 days:
 * day 2, 3, 4, 5, 6, 7, and 8.
 * 
 * Return the minimum number of dollars you need to travel every day in the given list of days.
*/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  if (!days.length) return 0;
  
  const dp = new Array(days[days.length - 1] + 1).fill(0);
  
  for (const num of days) {
      dp[num] = 1;
  }
  
  for (let i = 1; i < dp.length; i++) {
      if (!dp[i]) {
          dp[i] = dp[i-1]
      } else {
          dp[i] = Math.min(
              dp[Math.max(0, i-1)] + costs[0],
              dp[Math.max(0, i-7)] + costs[1],
              dp[Math.max(0, i-30)] + costs[2]
          );
      }
  }
  
  return dp[dp.length - 1];
};