/**
 * PROMPT:
 * Given a non-empty string check if it can be constructedby taking
 * a substring of it and appending multiple copies of the substring together.
 * You may assume the given string consists of lowercase English letters
 * only and its length will not exceed 10000.
 */

/**
 * @param {string} s
 * @return {boolean}
 */

 // Initial dumb idea.
var repeatedSubstringPattern = function(s) {
  if (s.length < 2) return false;
  
  const possSubs = [];
  
  let start = 0, end = s.length - 1;
  let subString = '', subCheck = '';
  
  while (start < end) {
      subString += s[start];
      subCheck = s[end] + subCheck;
      if (subString === subCheck) {
          possSubs.push(subString);
      }
      start++;
      end--;
  }
  
  if (!possSubs.length) {
      return false;
  }
  
  for (let i = 0; i < possSubs.length; i++) {
      const regex = new RegExp(possSubs[i], 'gi');
      const check = s.replace(regex, '');
      if (check === '') {
          return true;
      }
  }
  
  return false;
};

/**
 * Find substrings where length is a factor of s.length.
 * Test substring.repeat(factor) === s.
*/
var repeatedSubstringPattern = function(s) {
  if (s.length < 2) return false;
  
  let i = 0;
  while (i < Math.floor(s.length / 2)) {
      const mod = s.length % (i + 1);
      if (!mod) {
          const substring = s.slice(0, i + 1);
          const test = substring.repeat(s.length / (i + 1));
          if (test === s) return true;
      }
      i++;
  }
  
  return false;
};