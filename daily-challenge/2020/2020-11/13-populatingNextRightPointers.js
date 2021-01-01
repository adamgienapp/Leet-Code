// PROMPT: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;
  
  let queue = [[root, 0]];
  
  while (queue.length) {
      let [node, level] = queue.shift();
      if (node.left) {
          queue.push([node.left, level + 1]);
      }
      if (node.right) {
          queue.push([node.right, level + 1]);
      }
      if (queue[0]) {
          if (queue[0][1] === level) {
              node.next = queue[0][0];
          } else {
              node.next = null;
          }
      } else {
          node.next = null;
      }
  }
  
  return root;
};