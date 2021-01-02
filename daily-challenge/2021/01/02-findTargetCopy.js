// PROMPT: https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {    
  const dfs = (node) => {
      if (node === null) return null;

      if (node.val === target.val) return node;

      return dfs(node.left) || dfs(node.right);
  }
  
  return dfs(cloned);
};