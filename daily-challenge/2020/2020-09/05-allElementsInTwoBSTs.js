/**
 * PROMPT:
 * Given two binary search trees root1 and root2.
 * Return a list containing all the integers from both trees sorted in ascending order.
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const inorderValRetrieval = (node) => {
      const nodes = [];
      
      function traverse(n) {
          if (!n) return;
          if (n.left) {
              traverse(n.left);
          }
          nodes.push(n.val);
          if (n.right) {
              traverse(n.right);
          }
      }
      
      traverse(node);
      return nodes;
  }
  
  const tree1nodes = inorderValRetrieval(root1);
  const tree2nodes = inorderValRetrieval(root2);
  
  const sorted = [];
  let i = 0, j = 0;
  while (i < tree1nodes.length || j < tree2nodes.length) {
      if (i === tree1nodes.length) {
          sorted.push(tree2nodes[j]);
          j++;
      } else if (j === tree2nodes.length) {
          sorted.push(tree1nodes[i]);
          i++;
      } else {
          if (tree1nodes[i] <= tree2nodes[j]) {
              sorted.push(tree1nodes[i]);
              i++;
          } else {
              sorted.push(tree2nodes[j]);
              j++;
          }   
      }
  }
  
  return sorted;
};