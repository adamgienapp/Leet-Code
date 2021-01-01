/**
 * PROMPT:
 * Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path
 * from the root node down to the nearest leaf node.
 */

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
var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  
  let minDepth = 0;
  let queue = [[root]];
  while (queue.length) {
      minDepth++;
      let tier = queue.shift();
      let newTier = [];
      for (let i = 0; i < tier.length; i++) {
          let node = tier[i];
          if (node.left) newTier.push(node.left);
          if (node.right) newTier.push(node.right);
          if (!node.left && !node.right) return minDepth;
      }
      queue.push(newTier);
  }
};