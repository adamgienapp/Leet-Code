// PROMPT: 

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (n === 0) return true;
  
  let openingLen = 0;
  let adjacent1 = false;
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
      let spot = flowerbed[i];
      if (spot === 1) {
          n -= adjacent1 ? Math.floor((openingLen - 1) / 2) : Math.floor(openingLen / 2);
          openingLen = 0;
          adjacent1 = true;
      } else {
          openingLen++;
      }
  }
  n -= adjacent1 ? Math.floor(openingLen / 2) : Math.ceil(openingLen / 2);
  
  return n <= 0;
};