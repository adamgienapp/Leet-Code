/**
 * PROMPT:
 * Alice and Bob take turns playing a game, with Alice starting first.
 * 
 * Initially, there are n stones in a pile.  On each player's turn,
 * that player makes a move consisting of removing any non-zero square
 * number of stones in the pile.
 * 
 * Also, if a player cannot make a move, he/she loses the game.
 * 
 * Given a positive integer n, return True if and only if Alice wins the game.
 * Otherwise return False, assuming both players play optimally.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
  if (isPerfectSquare(n)) return true;
  let dp = new Array(n+1).fill(false);
  
  for (let i = 1; i < dp.length; i++) {
      if (isPerfectSquare(i)) {
          dp[i] = true;
      } else {
          for (let k = 1; k <= Math.floor(i ** .5); k++) {
              if (dp[i - (k ** 2)] === false) {
                  dp[i] = true;
                  break;
              }
          }
      }
  }
  
  return dp[n];
};

function isPerfectSquare(num) {
  return Number.isInteger(num ** .5);
}