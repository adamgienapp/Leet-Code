/**
 * PROMPT:
 * Write a function to find all the 10-letter-long sequences
 * (substrings) that occur more than once in a DNA molecule.
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let [once, twice] = [new Set(), new Set()];
  for (let i = 0; i < s.length - 9; i++) {
      let sub = s.slice(i, i+10);
      once.has(sub) ? twice.add(sub) : once.add(sub);
  }
  
  return [...twice];
};