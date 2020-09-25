/**
 * PROMPT:
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * Return as a string.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a,b) => {
      return parseInt(b+''+a) - parseInt(a+''+b);
  });
  let result = nums.join('');
  return parseInt(result) ? result : '0';
}