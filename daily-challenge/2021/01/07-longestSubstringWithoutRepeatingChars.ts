// PROMPT: https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;
  
  const locs = new Map();
  let maxLength: number = 0;    
  let start: number = 0;
  for (let i: number = 0; i < s.length; i++) {
      let char: string = s[i];
      if (locs.has(char)) {
          let idx: number = locs.get(char)
          if (idx >= start) {
              maxLength = Math.max(maxLength, i - start);
              start = idx + 1;
          }
      }
      locs.set(char, i);
      if (i === s.length - 1) {
          maxLength = Math.max(maxLength, i - start + 1);
      }
  }
  
  return maxLength;
};