/**
 * Given two strings A and B of lowercase letters, return true if
 * you can swap two letters in A so the result is equal to B, otherwise, return false.
 */

 /**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false;
  
  if (A.length < 2) return false;
  
  if (A.length === 2) {
      return A.split('').reverse().join('') === B;
  }
  
  if (A === B) {
      return new Set(A.split('')).size < A.length;
  }
  
  let aDict = [];
  
  for (let i = 0; i < A.length; i++) {
      if (A[i] !== B[i]) {
          aDict.push([A[i], i]);
      }
  }
  
  if (aDict.length !== 2) return false;
  else {
      return aDict[0][0] === B[aDict[1][1]] && aDict[1][0] === B[aDict[0][1]];
  }
};