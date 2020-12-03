// PROMPT: https://leetcode.com/problems/increasing-order-search-tree/

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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let dummy = new TreeNode();
  let curr = dummy;
  
  const inOrder = (node) => {
      if (!node) return;
      inOrder(node.left);
      curr.right = new TreeNode(node.val);
      curr = curr.right;
      inOrder(node.right);
  }
  
  inOrder(root);

  return dummy.right;
};