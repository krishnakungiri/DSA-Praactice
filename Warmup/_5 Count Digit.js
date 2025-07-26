//Write a function that returns count of digits in a number
let num = 259; // -259 , 0 , 1

function countDigit(num) {
  if (num == 0) return 1;
  let count = 0;

  num = Math.abs(num);
  while (num > 0) {
    num = Math.floor(num / 10);
    count = count + 1;
  }
  return count;
}

const result = countDigit(num);
console.log(result);
