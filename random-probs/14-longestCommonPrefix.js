var longestCommonPrefix = function(strs) {
  let result = '';
  if (strs[0]) {
      for (let i = 0; i < strs[0].length; i++) {
      let match = true;
          for (let j = 1; j < strs.length; j++) {
              if (strs[0][i] !== strs[j][i]) {
                  match = false;
                  break;
              }
          }
          if (match) {
              result += strs[0][i];                
          } else {
              break;
          }
      }
      return result;
  } else {
      return '';
  }
};
