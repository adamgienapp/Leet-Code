// PROMPT: 

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = n;
  if (count === 0) {
      return true;
  }
  for (let i = 0; i < flowerbed.length; i++) {
      if (!flowerbed[i]) {
          if (!flowerbed[i-1] && !flowerbed[i+1]) {
              count--;
              i++;
              if (count === 0) {
                  return true;
              }
          }
      } else {
          i++;
      }
  }
  
  return false;
};
