const dict = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

var letterCombinations = function(digits) {
  if (digits === '') {
      return [];
  }
  if (digits.length === 1) {
      return dict[digits];
  }
  const output = [];
  const base = letterCombinations(digits.slice(1));
  
  for (const char of dict[digits[0]]) {
      for (const val of base) {
          output.push(char + val);
      }
  }

  return output;
};
