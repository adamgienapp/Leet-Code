var myAtoi = function(str) {
  let cleanStr = str.trimStart();
  let modifier = 1;
  if (cleanStr[0] === '+') {
      cleanStr = cleanStr.slice(1);
  } else if (cleanStr[0] === '-') {
      modifier = -1;
      cleanStr = cleanStr.slice(1);
  }
  if (Number(cleanStr[0]) >= 0 && cleanStr[0] !== ' ') {
      let numStr = '';
      i = 0;
      while(Number(cleanStr[i]) >= 0 && cleanStr[i] !== ' ') {
          numStr += cleanStr[i];
          i++;
      }
      return modifier * Number(numStr) > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : modifier * Number(numStr) < Math.pow(-2, 31) ? Math.pow(-2, 31) : modifier * Number(numStr);
  } else {
      return 0;
  }
};
