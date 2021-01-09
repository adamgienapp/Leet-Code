// PROMPT: https://leetcode.com/problems/word-ladder/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList.indexOf(endWord) < 0) return 0;
  
  const dict = new Map();
  wordList.forEach(word => {
      fillDict(word, dict);
  });
  fillDict(beginWord, dict);
  
  const seen = new Set();
  const queue = [[beginWord, 1]];
  while (queue.length) {
      const [word, moves] = queue.shift();
      if (word === endWord) {
          return moves;
      }
      if (!seen.has(word)) {
          const ims = createIntermediates(word);
          ims.forEach(im => {
              dict.get(im).forEach(i => {
                  queue.push([i, moves + 1]);
              });
          });
          seen.add(word);
      }
  }
  
  return 0;
};

function fillDict(word, dictionary) {
  const intermediates = createIntermediates(word);
  intermediates.forEach(intermediate => {
      if (!dictionary.has(intermediate)) {
          dictionary.set(intermediate, [word]);
      } else {
          dictionary.get(intermediate).push(word);
      }
  });
}

function createIntermediates(word) {
  const result = [];
  const wordArr = word.split('');
  for (let i = 0; i < wordArr.length; i++) {
      let temp = wordArr[i];
      wordArr[i] = '*';
      result.push(wordArr.join(''));
      wordArr[i] = temp;
  }
  return result;
}