function reverse(num) {
  let x = Math.abs(num);
  let rev = 0;

  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }

  if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
    return 0;
  }

  return num < 0 ? -rev : rev;
}

const result = reverse(1534236469);
console.log(result);
console.log(Math.pow(-2, 31) > 1534236469);
console.log(Math.pow(2, 31) - 1 > 1534236469);

//-2147483648
//2147483647
