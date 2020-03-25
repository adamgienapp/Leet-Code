var threeSum = function(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
      while (nums[i] === nums[i-1]) {
          i++;
      }
      if (nums[i] > 0) {
          break;
      }
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
          if (nums[i] + nums[left] + nums[right] === 0) {
              result.push([nums[i], nums[left], nums[right]]);
              right--;
              while (nums[right] === nums[right + 1]) {
                  right--;
              }
              left++;
              while (nums[left] === nums[left - 1]) {
                  left++;
              }
          }
          if (nums[i] + nums[left] + nums[right] > 0) {
              right--;
              while (nums[right] === nums[right + 1]) {
                  right--;
              }
          }
          if (nums[i] + nums[left] + nums[right] < 0) {
              left++;
              while (nums[left] === nums[left - 1]) {
                  left++;
              }
          }
      }
  }
  return result;
};
