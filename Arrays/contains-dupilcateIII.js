/* 
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

i != j,
abs(i - j) <= indexDiff.
abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.

Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.

*/

// 1st attempt: time O(n^2) | space O(1)
const checkAllCases = (arr, indexDiff, valueDiff) => {
    // Initialing the outer for loop, that loops once thru arr
    for (let i = 0; i < arr.length; i++) {
        // Initialing the inner for loop, that loops thru arr on each index
        for (let j = 0; j < arr.length; j++) {
            // Store the diff between i , j in a var
            const iDiff = Math.abs(i - j);
            // Sore the value diff between arr[i] , arr[j]
            const vDiff = Math.abs(arr[i] - arr[j]);
            // Check if all the conditions are true; if so return true
            if (i !== j && iDiff <= indexDiff && vDiff <= valueDiff) return true;
        }
    }
    // If finished the loop return false 
   return false;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// Approach: Sliding window with buckets
// O(n) time | O(n) space
const containsNearbyAlmostDuplicate = (nums, indexDiff, valueDiff) => {
    const buckets = {};
    const width = valueDiff + 1; // width of bucket
    for (let i = 0; i < nums.length; i++) {
      const key = Math.floor(nums[i] / width);
      // if the bucket contains the key return true;
      if (key in buckets) return true;
      // check right and left
      if (key + 1 in buckets && Math.abs(nums[i] - buckets[key + 1]) <= valueDiff)
        return true;
      if (key - 1 in buckets && Math.abs(nums[i] - buckets[key - 1]) <= valueDiff)
        return true;
      buckets[key] = nums[i];
      // if i >= k delete the key k spots away to keep the sliding window valid
      if (i >= indexDiff) delete buckets[Math.floor(nums[i - indexDiff] / width)];
    }
    return false;
  };