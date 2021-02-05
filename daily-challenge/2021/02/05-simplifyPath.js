// https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.split('/');
  
  const stack = [];
  
  for (const p of path) {
      if (p === '.' || p === '') continue;
      else if (p === '..') stack.pop();
      else {
          stack.push(p);
      }
  }
  
  return '/' + stack.join('/');
};