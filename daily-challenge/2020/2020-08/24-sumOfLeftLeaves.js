/**
 * PROMPT:
 * Find the sum of all left leaves in a binary tree
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
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  
  let sum = 0;
  
  const queue = [[root, false]];
  
  while(queue.length) {
      const [node, isLeft] = queue.shift();
      if (!node.right && !node.left && isLeft) {
          sum += node.val;
      }
      if (node.left) {
          queue.push([node.left, true]);
      }
      if (node.right) {
          queue.push([node.right, false]);
      }
  }
  
  return sum;
};