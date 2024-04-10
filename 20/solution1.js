var isValid = function (s) {
  let map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    } else if (map.get(s[i]) !== stack.pop(s[i])) {
      return false;
    }
  }

  return stack.length ? false : true;
};
let s = "({))";
console.log(isValid(s));
