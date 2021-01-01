/**
 * PROMPT:
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen numbers
 * sum to target. You may return the combinations in any order.
 * 
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers
 * is different.
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];
  
  const findCombos = (combo, idx, num) => {
      for (let i = idx; i < candidates.length; i++) {
          let x = candidates[i];
          if (num - x === 0 ) {
             let newCombo = [...combo];
             newCombo.push(x);
             result.push(newCombo);
         } else if (num - x > 0) {
             let newCombo = [...combo];
             newCombo.push(x)
             findCombos(newCombo, i, num - x);
         }
      }
  }
  
  findCombos([], 0, target);
  
  return result;
};