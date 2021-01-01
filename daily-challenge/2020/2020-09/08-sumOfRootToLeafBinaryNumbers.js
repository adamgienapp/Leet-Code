/**
 * PROMPT:
 * Given a binary tree, each node has value 0 or 1.
 * Each root-to-leaf path represents a binary number starting with the most significant bit.
 * For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could
 * represent 01101 in binary, which is 13.
 * 
 * For all leaves in the tree, consider the numbers represented
 * by the path from the root to that leaf.
 * 
 * Return the sum of these numbers.
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
var sumRootToLeaf = function(root) {
  const leafPaths = [];
  const stack = [[root, []]];
  
  while(stack.length) {
      const info = stack.pop();
      const node = info[0];
      const path = [...info[1]];
      path.push(node.val);
      if (node.left) {
          stack.push([node.left, path]);
      }
      if (node.right) {
          stack.push([node.right, path]);
      }
      if (!node.left && !node.right) {
          leafPaths.push(path);
      }
  }
  
  let output = 0;
  
  leafPaths.forEach((path) => {
      output += parseInt(path.join(''), 2);
  });
  
  return output;
};