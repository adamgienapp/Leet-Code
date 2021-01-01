/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
  if (!s) return 0;
  
  let max = 1;
  let curr = 1;
  for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i-1]) {
          curr++;
      } else {
          max = Math.max(curr, max);
          curr = 1;
      }
  }
  max = Math.max(curr, max);
  
  return max;
};