/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

*/

const nums = [1,2,1]

// 1st attempt: time O(n) | space 0(n)
function concat(arr) {
    // This code creates an array with two empty slots, fills both slots with the value arr,
    // and then flattens the resulting nested array into a single-level array.
    return Array(2).fill(arr).flat();
}





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/


// O(n) time | O(n) space
const getConcatenation = (nums) => {
    const output = [];
    for (let i = 0; i < 2; i++) {
      for (let num of nums) {
        output.push(num);
      }
    }
    return output;
  };
  
  // O(n) time | O(n) space
  const getConcatenation2 = (nums) => {
    // declare idx and length variable
    let i = 0;
    const length = nums.length;
    while (i < length) {
      nums.push(nums[i]);
      i++;
    }
    return nums;
  };