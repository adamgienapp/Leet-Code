// PROMPT: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

// Lazy one-liner:
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join('') === word2.join('');
};

// O(1) space two (four?) pointer:
function arrayStringsAreEqualConstantSpace(word1: string[], word2: string[]): boolean {
  let [w2, p2] = [0,0];

  for (let i: number = 0; i < word1.length && w2 < word2.length; i++) {
    for (let j: number = 0; j < word1[i].length; j++) {
      if (!word2[w2] || word1[i][j] !== word2[w2][p2]) return false;
      if (++p2 === word2[w2].length) {
          w2++;
          p2 = 0;
      }
    }
  }

  return w2 === word2.length;
};