// PROMPT: https://leetcode.com/problems/house-robber-iii/

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
var rob = function(root) {
  const calc = (node) => {
      if (!node) return [0,0];
      
      const [leftWithNode, leftWithoutNode] = calc(node.left);
      const [rightWithNode, rightWithoutNode] = calc(node.right);
      
      const withNode = node.val + leftWithoutNode + rightWithoutNode;
      const withoutNode = Math.max(leftWithNode, leftWithoutNode) + Math.max(rightWithNode, rightWithoutNode);
      
      return [withNode, withoutNode];
  }
  
  return Math.max(...calc(root));
};