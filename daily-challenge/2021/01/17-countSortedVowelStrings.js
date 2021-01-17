// PROMPT: https://leetcode.com/problems/count-sorted-vowel-strings/

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n, addOne = true) {
  if (n < 1) return 0;
  
  let sum = 0;
  for (let i = n; i > 0; i -= i === n ? 2 : 1) {
      sum += 5 * ((i*(i+1))/2);
  }
  
  if (n % 5 === 0 && addOne) sum++;
  
  return sum + countVowelStrings(n - 5, false);
};