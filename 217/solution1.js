var containsDuplicate = function (nums) {
  let map = new Set();

  for (let num of nums) {
    if (map.has(num)) {
      return true;
    }

    map.add(num, true);
  }

  return false;
};

let nums = [1, 1, 2, 3, 4];

console.log(containsDuplicate(nums));
