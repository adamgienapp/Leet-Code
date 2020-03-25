var convert = function(s, numRows) {
  const matrix = [];
  for (var z = 0; z < numRows; z++) {
      matrix.push([]);
  }
  let i = 0;
  let j = 0;
  while (i < s.length) {
      for (var m = 0; m < numRows; m++) {
          matrix[m][j] = s[i];
          i++;
      }
      j++;
      for (var n = 0; n < numRows - 2; n++) {
          matrix[m - 2 - n][j] = s[i];
          i++;
          j++;
      }
  }
  let result = '';
  matrix.forEach(row => row.forEach(letter => {
      if (letter) {
          result += letter;
      }
  }));
  return result;
};
