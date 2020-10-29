// PROMPT: https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/563/week-5-october-29th-october-31st/3512/

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
  let dp = new Array(seats.length + 1).fill(0);
  dp[0] = Infinity;
  for (let i = 0; i < seats.length; i++) {
      if (seats[i] === 0) {
          dp[i+1] = dp[i] + 1 || Infinity;
      }
  }

  for (let i = seats.length - 1; i >= 0; i--) {
      if (seats[i] === 0) {
          dp[i+1] = Math.min(dp[i+1], dp[i+2] + 1 || Infinity);
      }
  }

  dp.shift();

  return Math.max(...dp);
};