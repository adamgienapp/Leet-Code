// PROMPT: https://leetcode.com/problems/jump-game-iii/

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  let visited = new Set();
  
  let queue = [start];
  
  while (queue.length) {
      let i = queue.shift();
      visited.add(i);
      if (arr[i] === 0) {
          return true;
      }
      let [jumpLeft, jumpRight] = [i - arr[i], i + arr[i]];
      if (jumpLeft >= 0 && !visited.has(jumpLeft)) queue.push(jumpLeft);
      if (jumpRight < arr.length && !visited.has(jumpRight)) queue.push(jumpRight);
  }
  
  return false;
};