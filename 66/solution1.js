var plusOne = function (digits) {
  if (digits.length === 0) return 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
  //   digits.unshift(1);
  //   return digits;
};

let digits1 = [9, 9];
let digits2 = [1, 1, 1];
let digits3 = [1, 2, 3];
let digits4 = [9];

console.log(plusOne(digits1));
console.log(plusOne(digits2));
console.log(plusOne(digits3));
console.log(plusOne(digits4));
