var threeSumClosest = function(nums, target) {
  if (nums.length < 4) {
      return nums.reduce((a, b) => a + b);
  }
  nums.sort((a, b) => a - b);
  let out = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
      let j = i + 1, k = nums.length - 1;
      let diff = (a) => Math.abs(a - target);
      while (j < k) {
          let sum = nums[i] + nums[j] + nums[k];
          if (diff(sum) < diff(out)) {
              if (diff(sum) === 0) {
                  return sum;
              } else {
                  out = sum;
              }
          }
          if (sum < target) {
              j++;
              while (nums[j] === nums[j-1]) {
                  j++;
              }
          }
          if (sum > target) {
              k--;
              while (nums[k] === nums[k+1]) {
                  k--;
              }
          }
      }
  }
  return out;
};
