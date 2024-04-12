var majorityElement = function (nums) {
  //   let map = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (map.has(nums[i])) {
  //       map.set(nums[i], map.get(nums[i]) + 1);
  //     } else {
  //       map.set(nums[i], 1);
  //     }
  //   }
  //   return map;
  let majority = nums[0];
  let votes = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === majority) {
      votes++;
    } else {
      votes--;
    }
    if (votes === 0) {
      majority = nums[i];
    }
  }

  return majority;
};

// let nums = [3, 2, 3];
// let nums = [3, 3, 4];
let nums = [3, 2, 3];

console.log(majorityElement(nums));
