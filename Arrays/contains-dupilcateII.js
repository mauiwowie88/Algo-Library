/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Input: nums = [1,2,3,1], k = 3
Output: true

Input: nums = [1,0,1,1], k = 1
Output: true

Input: nums = [1,2,3,1,2,3], k = 2
Output: false

*/

const nums = [1,2,3,1];

// 1st attempt: time O(n) | space O(n)
const contains = (arr, num) => {
    // Create cacheect to store each num in array and its index
    const cache = {};
    // Initiate for loop
    for (let i = 0; i < arr.length; i++) {
        // Store current num 
        const curr = arr[i];
        // Check if cache already has curr num store
        if (cache[curr]) {
            // If so push another index value to cache[curr] array
            cache[curr].push(i);
            // Create aa var storing the diff between the first and last el in cache[curr] array
            const diff = Math.abs(cache[curr][cache[curr].length - 1], cache[curr][0]);
            // If the diff is less than or equal to input num return true;
            if (diff >= num) return true;
        } 
        // If curr num doesnt exist in cache add it with its index in an array
        else cache[curr] = [i];
    }
    // If you finish the for loop; conditions were never met, return false;
    return false;
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// O(n) time | O(n) space
const containsNearbyDuplicate = (nums, k) => {
    // declare seen hash map that will contain the number and first index seen
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num in seen) {
        const firstIdx = seen[num];
        if (i - firstIdx <= k) return true;
      }
      seen[num] = i;
    }
    return false;
  };