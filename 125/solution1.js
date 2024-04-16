/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 1) return true;

  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let j = s.length - 1;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[j]) {
      return false;
    }
    j--;
  }

  return true;
};

let s = "raceCar";

console.log(isPalindrome(s));
