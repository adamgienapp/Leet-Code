// PROMPT: https://leetcode.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    
    const dfs = (node, depth = 0) => {
        if (!node) return [true, depth - 1];
        
        let leftRes = dfs(node.left, depth + 1);
        let rightRes = dfs(node.right, depth + 1);
        
        if (!leftRes[0] || !rightRes[0]) {
            return [false, Math.max(leftRes[1], rightRes[1])];
        } else {
            let bool = Math.abs(leftRes[1] - rightRes[1]) <= 1;
            return [bool, Math.max(leftRes[1], rightRes[1])];
        }
    }
    
    return dfs(root)[0];
};


// cleaner
var isBalanced = function(root) {
    let balanced = true;
    
    const findDepth = (node) => {
        if (!node) return 0;
        if (!balanced) return;
        
        const lDepth = findDepth(node.left);
        const rDepth = findDepth(node.right);
        const diff = Math.abs(lDepth - rDepth);
        
        if (diff > 1) balanced = false;
        
        return Math.max(lDepth, rDepth) + 1;
    }
    
    findDepth(root);
    
    return balanced;
};