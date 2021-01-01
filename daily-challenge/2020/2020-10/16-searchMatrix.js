/**
 * PROMPT:
 * Write an efficient algorithm that searches for a value in a sorted m x n matrix.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let rowIdx = null;
  let [l,r] = [0, matrix.length - 1];
  while (l <= r) {
      let mid = Math.floor((l + r)/2);
      if (matrix[mid][0] <= target && (!matrix[mid+1] || matrix[mid+1][0] > target)) {
          rowIdx = mid;
          break;
      } else if (matrix[mid][0] < target) {
          l = mid + 1;
      } else {
          r = mid - 1;
      }
  }
  
  if (rowIdx === null) return false;
  
  const row = matrix[rowIdx];
  [l,r] = [0, row.length - 1];
  while (l <= r) {
      let mid = Math.floor((l+r)/2);
      if (row[mid] === target) return true;
      if (row[mid] > target) {
          r = mid - 1;
      }
      if (row[mid] < target) {
          l = mid + 1;
      }
  }
  
  return false;
};