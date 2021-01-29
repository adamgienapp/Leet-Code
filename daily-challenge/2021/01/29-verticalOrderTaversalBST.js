// PROMPT: https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
  if (!root) return root;
  
  const res = [[]];
  
  let mid = 0;
  const stack = [[root, 0, 0]];
  
  while (stack.length) {
      const [node, dX, y] = stack.pop();
      const idx = mid + dX;
      if (idx < 0) {
          res.unshift([[node.val, y]]);
          mid++;
      } else if (idx === res.length) {
          res.push([[node.val, y]]);
      } else {
          res[idx].push([node.val, y]);
      }
      
      if (node.left) stack.push([node.left, dX - 1, y + 1]);
      if (node.right) stack.push([node.right, dX + 1, y + 1]);
  }
  
  return res.map(group => group.sort((a,b) => {
      if (a[1] === b[1]) {
          return a[0] - b[0];
      } else {
          return a[1] - b[1];
      }
  }).map(n => n[0]));
};