/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // if (x < 2) {
  //   return x;
  // }
  // let left = 0;
  // let right = x;

  // while (left <= right) {
  //   let middle = Math.floor((left + right) / 2);

  //   let sq = middle * middle;

  //   if (sq > x) {
  //     left = middle - 1;
  //   } else {
  //     right = middle + 1;
  //   }
  // }

  // return right;
  // if (x < 2) {
  //   return x;
  // }
  let low = 0,
    high = x;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid > x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return high;
};

let x = 7;

console.log(mySqrt(x));
