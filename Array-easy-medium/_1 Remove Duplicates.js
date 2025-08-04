/**
 * 26. Remove Duplicates from Sorted Array
 * Given an integer array nums sorted in non-decreasing order,
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
 */

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x++;
      nums[x] = nums[i];
    }
  }
  console.log(nums);
  return x + 1;
}

const result = removeDuplicates(nums);
console.log(result);
