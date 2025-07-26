/** #1 Write a function that retur index of the element
const arr = [4, 2, 0, 10, 8, 30];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

const ans = searchElement(arr, 49);
console.log(ans);
*/

/** #2 Write a function that return count of negative numbers
let arr = [2, -9, 17, 0, 1, -10, -4, 8];

function countNagatives(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
const result = countNagatives(arr);
console.log(result);
*/

/** #3 Write a function that return the largest element in the array 
let arr = [5, 7, 10, 8, 17, 1];

function findLargest(arr) {
  let largestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

const result = findLargest(arr);
console.log(result);
*/

/** #4 Write a function that return smallest number in the array */
const arr = [5, 7, 10, 8, 17, 1];

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const result = findSmallest(arr);
console.log(result);
