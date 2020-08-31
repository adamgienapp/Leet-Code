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
  
  let parent = null;
  let target = root;
  let isLeft = false;
  while (target) {
      if (target.val === key) {
          break;
      } else if (target.val > key) {
          parent = target;
          target = target.left;
          isLeft = true;
      } else if (target.val < key) {
          parent = target;
          target = target.right;
          isLeft = false;
      }
  }
  
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