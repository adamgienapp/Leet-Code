// PROMPT: https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/

/**
 * @param {number} n
 * @return {number}
 */
const mod = 10**9 + 7;

var concatenatedBinary = function(n) {
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        result *= 2 ** (Math.floor(Math.log2(i)) + 1);
        result += i;
        result %= mod;
    }
    
    return result;
};