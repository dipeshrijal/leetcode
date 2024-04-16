var missingNumber = function (nums) {
  let num = nums.length;

  for (let i = 0; i < nums.length; i++) {
    num = num + i - nums[i];
  }

  return num;
};

let nums = [3, 2, 1];

console.log(missingNumber(nums));
