/**
 * PROMPT:
 * In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.
 * (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
 * We may rotate the ith domino, so that A[i] and B[i] swap values.
 * 
 * Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.
 * 
 * If it cannot be done, return -1.
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  const [a, b] = [A[0], B[0]];
  let [checkA, checkB] = [true, true];
  let [aTop, bTop, aBot, bBot] = [1, 0, 0, 1];
  
  for (let i = 1; i < A.length; i++) {
      let [c, d] = [A[i], B[i]];
      if (checkA) {
          if (c === a) {
              aTop++; 
          }
          if (d === a) {
              aBot++;
          }
          if (c !== a && d !== a) {
              checkA = false;
          }
      }
      if (checkB) {
          if (c === b) {
              bTop++;
          }
          if (d === b) {
              bBot++;
          }
          if (c !== b && d !== b) {
              checkB = false;
          }
      }
      if (!(checkA || checkB)) {
          return -1;
      }
  }
  
  return A.length - Math.max(aTop, bTop, aBot, bBot);
};