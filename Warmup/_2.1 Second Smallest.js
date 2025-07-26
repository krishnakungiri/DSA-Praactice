/**Find second smallest number */

const arr = [4, 0, 2, 8, 7, 1, 9, 10, 10, 10, 10];
const arr2 = [0, 3, 5, 2, 7, 9];
const arr3 = [4, 4, 4, 4];
const arr4 = [5];
const arr5 = [10, 20];
function secondSmallest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast two number";
  }

  let firstSmall = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmall) {
      secondSmall = firstSmall;
      firstSmall = arr[i];
    } else if (arr[i] < secondSmall && arr[i] != firstSmall) {
      secondSmall = arr[i];
    }
  }
  if (secondSmall == firstSmall) {
    return "No second smallest number found";
  }

  return secondSmall;
}

const result = secondSmallest(arr2);
console.log(result);
