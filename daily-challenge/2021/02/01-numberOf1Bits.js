/**
 * @param {number} n - a positive integer
 * @return {number}
 */

const memo = new Map();

var hammingWeight = function(n) {
    if (n === 0) return 0;
    if (memo.has(n)) return memo.get(n);
    
    const ans = (n & 1) + hammingWeight(n >>> 1);
    memo.set(n, ans);
    
    return ans;
};