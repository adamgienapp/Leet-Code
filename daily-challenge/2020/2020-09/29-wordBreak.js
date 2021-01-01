/**
 * PROMPT:
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more
 * dictionary words.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < s.length; i++) {
    if (!dp[i]) continue;
    wordDict.forEach(word => {
      if (s.slice(i, i + word.length) === word) dp[i + word.length] = true;
    });
  }

  return dp[s.length];
};