var isMatch = function(s, p) {
  if (p === s) return true;
  if (s === '') {
      let check = p.split('*');
      if (check[check.length-1] === '') {
        check.pop();
      }
      if (p.length % check.length || check[0] === p) {
          return false;
      }
      for (let val of check) {
          if (val.length > 1) {
              return false
          }
      }
      return true;
  } else {
      if (!s.replace(new RegExp(p), '').length) {
          return true;
      } else {
          return false;
      }
  }
};
