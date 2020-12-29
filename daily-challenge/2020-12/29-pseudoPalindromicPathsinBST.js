// PROMPT: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/

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
var pseudoPalindromicPaths  = function(root) {
    let result = 0;
    
    const dfs = (node, set = new Set()) => {
        const path = new Set([...set]);
        if (path.has(node.val)) {
            path.delete(node.val);
        } else {
            path.add(node.val);
        }
        if (!node.left && !node.right) {
            if (path.size < 2) result++;
        }
        if (node.left) dfs(node.left, path);
        if (node.right) dfs(node.right, path);
    }
    
    dfs(root);
    
    return result;
};