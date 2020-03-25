var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  const track = {};
  
  let start = 0;
  let end = 0;
  while (end < s.length) {
      if (track[s[end]] !== undefined) {
          start = Math.max(start, track[s[end]] + 1);
      }
      track[s[end]] = end;
      longest = Math.max(end - start + 1, longest);
      end++;
  }
  
  return longest;
};
