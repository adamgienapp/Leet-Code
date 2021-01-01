/**
 * PROMPT:
 * Design an algorithm to serialize and deserialize a binary search tree.
 * You need to ensure that a binary search tree can be serialized to a string,
 * and this string can be deserialized to the original tree structure.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let res = [];
  
  const dfs = (node) => {
      if (!node) return res.push('_');
      res.push(node.val.toString(10));
      dfs(node.left);
      dfs(node.right);
  }
  
  dfs(root);
  
  return res.join(',');
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  data = data.split(',');
  let i = 0;

  const dfs = () => {
      const current = data[i++];
      if (current === '_' || current === undefined) return null;
      const newNode = new TreeNode(parseInt(current, 10));
      newNode.left = dfs();
      newNode.right = dfs();
      return newNode;
  };

  return dfs();
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/