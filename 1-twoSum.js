var twoSum = function(nums, target) {
  let numsObj = {};
  nums.forEach((num, index) => { numsObj[num] = index });
  for (let index in nums) {
      let diff = numsObj[target - nums[index]];
      if (diff && diff !== Number(index)) {
          return index > diff ? [diff, index] : [index, diff];
      }
  }
};
