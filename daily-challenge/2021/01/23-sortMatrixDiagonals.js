// PROMPT: https://leetcode.com/problems/sort-the-matrix-diagonally/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  for (let i = 0; i < mat[0].length; i++) {
      setDiagVals(mat, i, 0);
  }
  
  for (let j = 1; j < mat.length; j++) {
      setDiagVals(mat, 0, j);
  }
  
  return mat;
};

function setDiagVals(mat, x, y) {
  const vals = [];
  
  for (let i = x, j = y; i < mat[0].length && j < mat.length; i++) {
      vals.push(mat[j][i]);
      j++;
  }
  
  vals.sort((a,b) => a - b);
  
  for (let i = x, j = y; i < mat[0].length && j < mat.length; i++) {
      mat[j][i] = vals.shift();
      j++;
  }
}