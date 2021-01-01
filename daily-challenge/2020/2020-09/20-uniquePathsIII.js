/**
 * PROMPT:
 * On a 2-dimensional grid, there are 4 types of squares:
 *    1 represents the starting square.  There is exactly one starting square.
 *    2 represents the ending square.  There is exactly one ending square.
 *    0 represents empty squares we can walk over.
 *    -1 represents obstacles that we cannot walk over.
 * 
 * Return the number of 4-directional walks from the starting square to the ending square,
 * that walk over every non-obstacle square exactly once.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  let validPaths = 0;
  
  const findStart = () => {
      for (let i = 0; i < grid.length; i++) {
          if (grid[i].indexOf(1) > -1) {
              return [i, grid[i].indexOf(1)];
          }
      }
  }
  
  const recursor = (y, x, m) => {
      const dirs = [[1,0],[0,1],[-1,0],[0,-1]];
      
      for (let i = 0; i < dirs.length; i++) {
          let [dx, dy] = dirs[i];
          let nX = x + dx;
          let nY = y + dy;
          if (nX < m[0].length && nX > -1 && nY < m.length && nY > -1) {
              if (m[nY][nX] === 0) {
                  m[nY][nX] = '*';
                  recursor(nY, nX, m);
                  m[nY][nX] = 0;
              }
              if (m[nY][nX] === 2) {
                  let valid = true;
                  for (let i = 0; i < m.length; i++) {
                    if (m[i].indexOf(0) > -1) valid = false;
                  }
                  if (valid) validPaths++;
              }    
          }
      }
  }
  
  recursor(...findStart(), grid);
  
  return validPaths;
};