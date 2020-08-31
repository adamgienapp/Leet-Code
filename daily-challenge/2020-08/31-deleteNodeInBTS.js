/**
 * PROMPT:
 * Given a BST root and a key value, if a node exists with the key value,
 * delete it and return the updated tree.
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null;
  
  const findNode = (val) => {
      if (root.val === key) return [root, null, false];
      
      const stack = [root];
      
      while(stack.length) {
          let node = stack.pop();
          
          if (node.left) {
              if (node.left.val === val) {
                  return [node.left, node, true];
              }
              stack.push(node.left);   
          }
          if (node.right) {
              if (node.right.val === val) {
                  return [node.right, node, false];
              }
              stack.push(node.right);
          }
      }
      
      return [null, null, false];
  }
  
  let [target, parent, isLeft] = root.val === key ? [root, null, false] : findNode(key);
  
  if (!target) return root;
  
  const leftChild = target.left;
  const rightChild = target.right;
  
  const rebuildSubtree = (left, right) => {
      if (!left) return right;
      if (!right) return left;
      
      let root;
      if (right.left) {
          root = right.left;
          let parent = right;
          
          while(root.left) {
              parent = root;
              root = root.left;
          }
          parent.left = root.right;
          root.left = left;
          root.right = right;
      }
      else {
          root = right;
          root.left = left;
      }
      
      return root;
  }
  
  const newSubtree = rebuildSubtree(leftChild, rightChild);
  
  if (!parent) return newSubtree;
  else {
      if (isLeft) {
          parent.left = newSubtree;
      } else {
          parent.right = newSubtree;
      }   
  }
  
  return root;
};