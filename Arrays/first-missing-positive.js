/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space.

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.
*/

// 1st attempt: time O(n) | space O(1)
const findMissing = (arr) => {
    // Create a copy of the input array sorted
    const sorted = [...arr].sort((a, b) => a - b);
    // Loop thru copy array starting at i 1
    for (let i = 1; i < sorted.length; i++) {
        // Create a curr var
        const curr = sorted[i];
        // Check if curr is < 1; if so continue
        if (curr < 1) continue;
        // Create a var of what the previous i value should be
        const prev = sorted[i-1] + 1;
        // Check if curr !== what prev should be; if so return what prev should be
        if (curr !== prev) return prev;  
    }
    // Once looping return last num plus one; the next missing number
    return sorted.pop() + 1;
 }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// O(n) time | O(1) space
const firstMissingPositive = (nums) => {
    // convert all negative numbers to zero
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < 0) nums[i] = 0;
    }
  
    // traverse array and mark values if it exists in input array
    // but only for values in bounds
    for (let i = 0; i < nums.length; i++) {
      if (Math.abs(nums[i]) > 0) {
        const idx = Math.abs(nums[i]) - 1;
        if (nums[idx] > 0 && idx < nums.length) {
          nums[idx] *= -1;
        } else if (nums[idx] === 0) {
          nums[idx] = -1 * (nums.length + 1);
        }
      }
    }
    // return the index that is not positive
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= 0) return i + 1;
    }
    // if all numbers are negative in array return length of array + 1
    return nums.length + 1;
  };