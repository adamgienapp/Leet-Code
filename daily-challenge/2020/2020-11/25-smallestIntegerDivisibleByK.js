/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  if (K % 2 === 0 || K % 5 === 0) return -1;
  
  let n = '1'.repeat(Math.ceil(Math.log10(K))) || '1';
  let r = +n % K;
  
  while (r) {
      r = (r * 10 + 1) % K;
      n += '1';
  }
  
  return n.length;
};