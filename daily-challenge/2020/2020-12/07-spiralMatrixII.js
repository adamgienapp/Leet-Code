/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let matrix = Array.from({length: n}, () => new Array(n));
  let total = n * n;

  let num = 1;
  let diff = 1;
  let [x, y] = [0,0];
  let [dX, dY] = [1, 0];
  
  while(num <= total) {
      matrix[y][x] = num++;
      x += dX;
      y += dY;
      if (++diff == n) {
          if (dY < 0) {
              x++;
              y++;
              n -= 2;
          }
          diff = dX;
          dX = -dY;
          dY = diff;
          diff = 1;
      }
  }
  
  return matrix;
};