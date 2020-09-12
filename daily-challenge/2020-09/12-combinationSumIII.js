/**
 * PROMPT:
 * Find all possible combinations of k numbers that add up to a number n,
 * given that only numbers from 1 to 9 can be used and each combination
 * should be a unique set of numbers. 
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];
  
  function findCombos (start, currRes = []) {
      let sum = currRes.reduce((a,b) => a + b, 0);
      if (sum === n && currRes.length === k) {
          result.push([...currRes]);
      } else if (sum > n || currRes.length > k) {
          return;
      } else {
          for (let i = start; i <= 9; i++) {
              if (sum + i <= n) {
                  currRes.push(i);
                  findCombos(i + 1, currRes);
                  currRes.pop();
              }
          }
      }
  }
  
  findCombos(1);
  
  return result;
};