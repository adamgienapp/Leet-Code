var romanToInt = function(s) {
  let output = 0;
  
  let i = 0;
  while (i < s.length) {
      if(s[i] === 'M') {
          output += 1000;
          i++;
      } else if (s[i] === 'D') {
          output += 500;
          i++;
      } else if (s[i] === 'C') {
          if (s[i+1] === 'M') {
              output += 900;
              i += 2;
          } else if (s[i+1] === 'D') {
              output += 400;
              i += 2;
          } else {
              output += 100;
              i++;
          }
      } else if (s[i] === 'L') {
          output += 50;
          i++;
      } else if (s[i] === 'X') {
          if (s[i+1] === 'C') {
              output += 90;
              i += 2;
          } else if (s[i+1] === 'L') {
              output += 40;
              i += 2;
          } else {
              output += 10;
              i++;
          }
      } else if (s[i] === 'V') {
          output += 5;
          i++;
      } else if (s[i] === 'I') {
          if (s[i+1] === 'X') {
              output += 9;
              i += 2;
          } else if (s[i+1] === 'V') {
              output += 4;
              i += 2;
          } else {
              output += 1;
              i++;
          }
      }
  }
  
  return output;
};
