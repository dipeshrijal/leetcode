var missingNumber = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!map.has(i)) {
      return i;
    }
  }
};

let nums = [3, 0, 1];

console.log(missingNumber(nums));
