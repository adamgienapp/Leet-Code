/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const [h, w] = [heights.length - 1, heights[0].length - 1];
  let minEffort = 0;
  let maxEffort = minEffort;
  heights.forEach(row => {
      maxEffort = Math.max(maxEffort, Math.max(...row));
  });
  
  const reachEndWithKEffort = (k) => {
      const delta = [[1,0], [-1,0], [0,1], [0,-1]];
      
      const stack = [[0,0]];
      const visited = new Set();
      while(stack.length) {
          const [m, n] = stack.pop();
          if (m === h && n === w) return true;
          
          visited.add(`${m},${n}`);
          for (const [dM, dN] of delta) {
              const [vM, vN] = [m + dM, n + dN];
              if (vM >= 0 && vM <= h && vN >= 0 && vN <= w && !visited.has(`${vM},${vN}`)) {
                  if (Math.abs(heights[vM][vN] - heights[m][n]) <= k) {
                      stack.push([vM, vN]);
                  }
              }
          }
      }
      
      return false;
  }
  
  while(minEffort < maxEffort) {
      const midEffort = Math.floor((minEffort + maxEffort)/2);
      if (reachEndWithKEffort(midEffort)) {
          maxEffort = midEffort;
      } else {
          minEffort = midEffort + 1;
      }
  }
  
  return maxEffort;
};