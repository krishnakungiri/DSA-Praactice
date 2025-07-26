/** Find second largest number in array 
 Requirements:
The array must contain at least two elements.
If all elements are equal, return: No second largest found.
If the array has fewer than two elements, return: Array should have at least two numbers.
Examples:
Input: arr = [0, 3, 5, 2, 7, 9] → Output: 7

Input: arr = [4, 4, 4, 4] → Output: No second largest found

Input: arr = [5] → Output: Array should have at least two numbers

Input: arr = [10, 20] → Output: 10
*/

const arr = [4, 0, 2, 8, 7, 1, 9, 10, 10, 10, 10];
const arr2 = [0, 3, 5, 2, 7, 9];
const arr3 = [4, 4, 4, 4];
const arr4 = [5];
const arr5 = [10, 20];

function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have atleast two number";
  }
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first) {
      second = arr[i];
    } else {
      return "No second largest number found";
    }
  }
  return second;
}

const result = secondLargest(arr5);

console.log(result);
