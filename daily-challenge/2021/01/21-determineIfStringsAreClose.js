// PROMPT: https://leetcode.com/problems/determine-if-two-strings-are-close/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) return false;
  
  const dict1 = new Array(26).fill(0);
  
  for (const char of word1) {
      dict1[char.charCodeAt(0) - 97]++;
  }
  
  const dict2 = new Array(26).fill(0);
  
  for (const char of word2) {
      dict2[char.charCodeAt(0) - 97]++;
  }
  
  const diffs1 = [];
  const diffs2 = [];
  
  for (let i = 0; i < dict1.length; i++) {
      if (dict1[i] === dict2[i]) {
          continue;
      } else if (!dict1[i] || !dict2[i]) {
          return false;
      } else {
          diffs1.push(dict1[i]);
          diffs2.push(dict2[i]);
      }
  }
  
  diffs1.sort((a,b) => a - b);
  diffs2.sort((a,b) => a - b);
  
  for (let i = 0; i < diffs1.length; i++) {
      if (diffs2[i] !== diffs1[i]) return false;
  }
  
  return true;
};