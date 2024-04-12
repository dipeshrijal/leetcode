const merge = function (nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (right < 0) break;

    if (nums1[left] > nums2[right]) {
      nums1[i] = nums1[left];
      left--;
    } else {
      nums1[i] = nums2[right];
      right--;
    }
  }

  // let left = m - 1;
  // let right = n - 1;
  // let k = m + n - 1;

  // while (right >= 0) {
  //   if (left >= 0 && nums1[left] > nums2[right]) nums1[k--] = nums1[left--];
  //   else nums1[k--] = nums2[right--];
  // }

  return nums1;
};

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [4, 5, 6],
  n = 3;

console.log(merge(nums1, m, nums2, n));
