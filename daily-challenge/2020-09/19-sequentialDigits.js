/**
 * PROMPT:
 * An integer has sequential digits if and only if each digit
 * in the number is one more than the previous digit.
 * 
 * Return a sorted list of all the integers in the range
 * [low, high] inclusive that have sequential digits.
 */

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  const result = [];
  
  let numStr = '123456789';
  let currLen = low.toString().length;
  let endLen = high.toString().length;
  
  while (currLen <= endLen) {
      for (let i = 0; i <= numStr.length - currLen; i++) {
          let currNum = parseInt(numStr.slice(i, i + currLen));
          if (currNum >= low) {
              if (currNum <= high) {
                  result.push(currNum);   
              } else {
                  break;
              }
          }
      }
      currLen++;
  }
  
  return result;
};