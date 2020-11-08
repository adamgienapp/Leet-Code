// PROMPT: https://leetcode.com/problems/binary-tree-tilt/

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
 * @return {number}
 */
var findTilt = function(root) {
  let treeTilt = 0;
  
  const calcTilt = (node) => {
      if (!node) return 0;
      
      let left = node.left ? calcTilt(node.left) : 0;
      let right = node.right ? calcTilt(node.right) : 0;
      
      treeTilt += Math.abs(left - right);
      
      return node.val + left + right;
  }
  
  calcTilt(root);
  
  return treeTilt;
};