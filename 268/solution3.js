var missingNumber = function (nums) {
  let num = nums.length;
  for (let i = 0; i < nums.length; i++) {
    num = num ^ nums[i] ^ i;
  }
  return num;
};

let nums = [1, 0, 4, 2];

console.log(missingNumber(nums));
