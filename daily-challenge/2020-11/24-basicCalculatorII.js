// PROMPT: https://leetcode.com/problems/basic-calculator-ii/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s.replace(/\s/g, '');
  
  const priority = {
      '+': 0,
      '-': 0,
      '*': 1,
      '/': 1
  };
  
  const resolve = (a, b, op) => {
      a = parseInt(a);
      b = parseInt(b);
      
      if (!b && !op) return a;
      
      switch(op) {
          case '*':
              return a * b;
          case '/':
              return Math.floor(a / b);
          case '+':
              return a + b;
          case '-':
              return a - b;
          default:
              throw new Error('not a valid operation!');
      }
  }
  
  let currA = '';
  let currB = '';
  // let currC = '';
  let currOp = '';
  let nextOp = '';
  
  for (let i = 0; i < s.length; i++) {
      if (!isNaN(s[i])) {
          if (!currOp) {
              currA += s[i];
          } else {
              currB += s[i];
          }
      } else {
          if (!currOp) {
              currOp = s[i];
          } else {
              if (priority[s[i]] > priority[currOp]) {
                  nextOp = s[i];
                  let nextNum = '';
                  i++;
                  while (!isNaN(s[i])) {
                      nextNum += s[i];
                      i++;
                  }
                  currB = resolve(currB, nextNum, nextOp);
                  i--;
              } else {
                  currA = resolve(currA, currB, currOp);
                  currB = '';
                  currOp = s[i];
              }
          }
      }
  }
  
  return resolve(currA, currB, currOp);
};