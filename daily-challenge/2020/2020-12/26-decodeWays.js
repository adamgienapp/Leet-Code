// PROMPT: https://leetcode.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (!s) return 0;
    
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    
    for (let i = 2; i <= s.length; i++) {
        if (s[i-1] !== '0') {
            dp[i] += dp[i-1];
        }
        
        let twoDigit = +s.substring(i-2, i);
        if (twoDigit >= 10 && twoDigit <= 26) {
            dp[i] += dp[i-2];
        }
    }
    

    return dp[s.length];
};