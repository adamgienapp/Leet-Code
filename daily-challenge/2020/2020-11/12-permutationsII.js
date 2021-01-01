// PROMPT: https://leetcode.com/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if (nums.length < 2) return [nums];
  
  nums.sort((a,b) => a - b);

  const res = [];

  const permutator = (curr, next) => {
      if (!curr.length) {
          res.push(next);
      } else {
          for (let i = 0; i < curr.length; i++) {
              if (curr[i] === curr[i-1]) continue;
              else {
                  next.push(curr[i]);
                  let temp = [...curr];
                  temp.splice(i, 1);
                  permutator(temp, [...next]);
                  next.pop();
              }
          }

      }
  }

  permutator(nums, []);

  return res;
};