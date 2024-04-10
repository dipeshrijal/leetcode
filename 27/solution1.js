var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let pointer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pointer] = nums[i];
      pointer++;
    }
  }
  return pointer;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
console.time("LeetCode");
console.log(removeElement(nums, val));
console.timeEnd("LeetCode");
