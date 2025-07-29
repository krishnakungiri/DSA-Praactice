// Write a palindrome program

let n = 101; // 121, 345, 545, 1001

function palindrome(num) {
  let rev = 0;
  let n = num;
  if (n == 0) {
    return "invalid number";
  }

  while (n > 0) {
    let rem = n % 10;

    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }

  console.log(rev);
  if (rev == num) {
    return true;
  } else {
    return false;
  }
}

const result = palindrome(n);
console.log(result);
