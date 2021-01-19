/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;
  
  let longest = s[0];
  for (let i = 0; i < s.length; i++) {
      if (s[i-1] === s[i+1]) {
          let pal = createPalindrome(i-2, i+2, s);
          if (pal.length > longest.length) {
              longest = pal;
          }
      }
      if (s[i+1] === s[i]) {
          let pal = createPalindrome(i-1, i+2, s);
          if (pal.length > longest.length) {
              longest = pal;
          }
      }
  }
  
  return longest;
};

function createPalindrome(l, r, s) {
  while(s[l] === s[r] && s[l] && s[r]) {
      l--;
      r++;
  }
  return s.substring(l+1, r);
}