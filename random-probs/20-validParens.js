var isValid = function(s) {
  if (s.length % 2) {
    return false;
  }
  let expected = '';
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          expected = ')' + expected;
      } else if (s[i] === '[') {
          expected = ']' + expected;
      } else if (s[i] === '{') {
          expected = '}' + expected;
      } else {
          if (s[i] === expected[0]) {
              expected = expected.slice(1);
          } else {
              return false;
          }
      }
  }
  return expected.length ? false : true;
};
