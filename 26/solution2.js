var removeDuplicates = function (nums) {
  let pointer = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }

  return pointer;
};

const nums = [0, 0, 1, 2, 3, 4, 4];
console.time("removeDuplicates");
console.log(removeDuplicates(nums));
console.timeEnd("removeDuplicates");
