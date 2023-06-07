/* 
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
*/

// 1st approach: time O(n) | space O(n)
const difference = (arr1, arr2) => {
    // Create a obj builder functioin; might be overkill
    const objBuilder = (arr) => {
        // Create cache
        const cache = {};
        // Loop thru input arr
        for (const num of arr) {
            // Add curr num in cache
            cache[num] = num;
        }
        // Once done looping return cache
        return cache;
    }
    // Create an obj comparing method
    const objChecker = (obj1, obj2) => {
        // Create our output; an array of arrays filled with unique numbers
        let output = [[], []];
        // Loop thru first obj
        for (const key in obj1) {
            // Check if curr key is in other obj; if so output[0].push(key)
            if (!obj2[key]) output[0].push(obj1[key]);
        }
        // Loop trhu second obj
        for (const key in obj2) {
            // Check if curr key is in other obj; if so output[1].push(key)
            if (!obj1[key]) output[1].push(obj2[key]);
        }
        // Return output
        return output;
    }
    // Call obj builder function on both objs
    const cache1 = objBuilder(arr1);
    const cache2 = objBuilder(arr2);
    // return value of invoking objChecker(cache1, cache2)
    return objChecker(cache1, cache2);
}


// chatgpt approach: time O(n) | space O(n)
const difference2 = (arr1, arr2) => {
    // Set creates a new empty obj
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    // Store the result of filtering thru [...set1] checking if it is included in other set && vice versa
    const diff1 = [...set1].filter(num => !set2.has(num));
    const diff2 = [...set2].filter(num => !set1.has(num));
    // Return array containing arrays with unique numbers
    return [diff1, diff2];
  };



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
    second one is a better version of what i came up with.
*/


// O(n + m) time | O(max(n, m)) where n is the length of nums1 and m is the length of nums2
const findDifference = (num1, num2) => {
    const nums1Map = {};
    const nums2Map = {};
    for (let num of num1) {
      nums1Map[num] = true;
    }
    for (let num of num2) {
      nums2Map[num] = true;
    }
  
    const output1 = new Set();
    const output2 = new Set();
    for (let num of num1) {
      if (!(num in nums2Map)) output1.add(num);
    }
    for (let num of num2) {
      if (!(num in nums1Map)) output2.add(num);
    }
  
    return [[...output1], [...output2]];
  };

