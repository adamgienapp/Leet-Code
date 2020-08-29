/**
 * PROMPT:
 * Given an array of integers A, we need to sort the array performing a series of pancake flips.
 * 
 * In one pancake flip we do the following steps:
 *  Choose an integer k where 0 <= k < A.length.
 *  Reverse the sub-array A[0...k].
 * 
 * For example, if A = [3,2,1,4] and we performed a pancake flip choosing k = 2,
 * we reverse the sub-array [3,2,1], so A = [1,2,3,4] after the pancake flip at k = 2.
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
  //helper funcs
  const getIndexOfLargest = (len) => {
      let largest = 0;
      for (let i = 0; i <= len; i++) {
          if (A[i] > A[largest]) {
              largest = i;
          }
      }
      return largest;
  }
  
  const flip = (k) => {
    let lo = 0;
    let hi = k;
    while (lo < hi) {
        [A[lo], A[hi]] = [A[hi], A[lo]];
        lo++;
        hi--;
    }
  }
  
  //algorithm
  const result = [];
  let len = A.length - 1;
  
  while (len > 0) {
      const idx = getIndexOfLargest(len);
      if (idx !== len) {
          if (idx > 0) {
              result.push(idx + 1);
              flip(idx);   
          }
          result.push(len + 1);
          flip(len);
      }
      len--;
  }
  
  return result;
};