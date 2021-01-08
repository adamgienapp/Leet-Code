// PROMPT: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

// Lazy one-liner:
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  return word1.join('') === word2.join('');
};

// O(1) space two (four?) pointer:
function arrayStringsAreEqualConstantSpace(word1: string[], word2: string[]): boolean {
  let [w1, p1, w2, p2] = [0,0,0,0];

  while(w1 < word1.length && w2 < word2.length) {
    if (!word2[w2] || word1[w1][p1] !== word2[w2][p2]) return false;

    if (++p1 === word1[w1].length) {
      w1++;
      p1 = 0;
    }

    if (++p2 === word2[w2].length) {
      w2++;
      p2 = 0;
    }
  }

  return w1 === word1.length && w2 === word2.length;
};