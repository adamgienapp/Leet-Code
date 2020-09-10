/**
 * PROMPT:
 * Mastermind, but one bull for a correct num in correct spot,
 * and one cow for correct num in wrong spot.
 */

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  let bulls = 0, cows = 0;
  let map = new Array(10).fill(0);
  
  for (let i = 0; i < secret.length; i++) {
      if (secret[i] === guess[i]) {
          bulls++;
      } else {
          if (map[secret[i]]++ < 0) cows++;
          if (map[guess[i]]-- > 0) cows++;
      }
  }
  
  return `${bulls}A${cows}B`;
};