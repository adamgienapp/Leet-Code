/**
 * PROMPT:
 * Given an array of 4 digits, return the largest 24 hour time that can be made.
 * If no valid time can be made, return an empty string.
 */

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
  A.sort((a,b) => a-b);
  if (A[0] > 2 || (A[0] * 10 + A[1] >= 24)) return '';
  
  let h1 = 0, h2 = null;
  while (A[h1+1] < 3) {
      h1++;
  }
  if (A[h1] === 2 && h1 === 1 && A[h1+1] > 5) {
      h1--;
  }
  if (h1 < 3) {
      if (A[h1] < 2) {
          h2 = 3;
      } else {
          let moved = false;
          h2 = h1+1;
          while(A[h1] * 10 + A[h2] <= 24 && h2 + 1 < 4) {
              h2++;
              moved = true;
          }
          if (moved) {
              h2--;
          } else {
              
          }
          if (A[h2] >= 4 && A[h1] === 2) {
              h2 = h1 > 0 ? h1 - 1 : h1 + 1;
          }
      }
  } else {
      h2 = h1 - 1;
  }
  
  let [m1, m2] = [0,1,2,3].filter(x => x !== h1 && x!== h2);
  
  let curr = A[m1] * 10 + A[m2];
  let alt = A[m2] * 10 + A[m1];
  if (curr >= 60 && alt >= 60) {
      return '';
  }
  if (curr >= 60 || (alt > curr && alt < 60)) {
      [m1, m2] = [m2, m1];
  }
  
  return `${A[h1]}${A[h2]}:${A[m1]}${A[m2]}`;
};