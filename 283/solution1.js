var moveZeroes = function (nums) {
  let slow = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[slow];
      nums[slow] = nums[i];
      nums[i] = temp;
      slow++;
    }
  }

  return nums;
};

let nums = [0, 0, 0, 0, 0, 0, 1, 2, 30, 45, 0, 0, 1, 1, 1, 2];

console.log(moveZeroes(nums));
