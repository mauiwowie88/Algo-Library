/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
*/

const majority = (nums) => {
    const half = (nums.length / 2) - 1;
    const cache = {};
    for (const num of nums) {
        if (cache[num]) {
            if (cache[num] >= half) return num;
            cache[num]++;
        } else cache[num] = 1;
    }
    return nums[0];
}
