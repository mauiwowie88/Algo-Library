/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Input: nums = [1,1,1,2,2,3]

Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

// 1st attempt: time O(n) | space O(n)
const removeDups = (arr) => {
  const cache = {};
  let x = 0;
  arr.map(num => cache[num] ? cache[num]++ : cache[num] = 1);
  for (const key in cache) {
    let count = 2;
    while (count && cache[key]) {
      arr[x++] = Number(key);
      count--;
      cache[key]--;
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = '_';
  }
  return x;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// O(n) time | O(1) space
const removeDuplicates = (nums) => {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    let count = 1;
    const num = nums[j];
    while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
      count++;
      j++;
    }

    for (let k = 0; k < Math.min(count, 2); k++) {
      nums[i] = num;
      i++;
    }
    j++;
  }
  return i;
}; 