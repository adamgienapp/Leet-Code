// PROMPT: https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
  const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  
  let transformations = new Set();
  
  for (const word of words) {
      let morse = '';
      for (let char of word) {
          morse += dict[char.charCodeAt(0) - 97];
      }
      transformations.add(morse);
  }
  
  return transformations.size;
};