/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);
  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - i - 1]; // is equal to len - (i+1)
    s[len - i - 1] = temp; // is equal to len - (i+1)
  }

  return s;
};
function swap(a, b) {}
//swift(0, n-1)
//swift(1, n-2)
//swift(2, n-3)

const s = ["D", "E", "P", "T", "H"]; // H T P E D
const result = reverseString(s);
console.log(result);
