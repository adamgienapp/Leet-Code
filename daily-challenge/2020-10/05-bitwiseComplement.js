/**
 * PROMPT:
 * The complement of a binary representation is the number in binary you get when changing every 1 to a 0 and 0 to a 1.
 * For example, the complement of "101" in binary is "010" in binary.
 * 
 * For a given number N in base-10, return the complement of it's binary representation as a base-10 integer.
 */

/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
  let binary = N.toString(2).split('');
  
  for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '0') {
          binary[i] = '1';
      } else {
          binary[i] = '0';
      }
  }
  
  return parseInt(binary.join(''), 2);
};