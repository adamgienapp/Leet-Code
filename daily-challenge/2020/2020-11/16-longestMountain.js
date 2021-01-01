// PROMPT: https://leetcode.com/problems/longest-mountain-in-array/

/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  let length = 0;
  
  let up = true;
  let [upLen, downLen] = [0, 0];
  
  for (let i = 1; i < A.length; i++) {
      if (up) {
          if (A[i] > A[i-1]) {
              upLen++;
          } else if (A[i] === A[i-1]) {
              upLen = 0;
          } else {
              if (upLen > 0) {
                  up = false;
                  downLen++;
                  continue;
              }
          }
      } else {
          if (A[i] < A[i-1]) {
              downLen++;
          } else {
              length = Math.max(length, upLen + downLen + 1);
              up = true;
              [upLen, downLen] = [A[i] > A[i-1] ? 1 : 0, 0];
          }
          
      }
  }
  
  if (downLen > 0) {
      length = Math.max(length, upLen + downLen + 1);
  }
  
  return length;
};