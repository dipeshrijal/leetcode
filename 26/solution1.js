// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return 0;
//   let pointer = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] != nums[i - 1]) {
//       nums[pointer] = nums[i];
//       pointer++;
//     }
//   }

//   return pointer;
// };

var removeDuplicates = function (nums) {
  let k = 1;
  let i = 1;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] !== nums[j]) {
      nums[k] = nums[i];
      k++;
    }
    i++;
    j++;
  }
  return k;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
