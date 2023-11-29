/*
    You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and 
    two integers m and n, representing the number of elements in nums1 and nums2 respectively.

    Merge nums1 and nums2 into a single array sorted in non-decreasing order.
    
    The final sorted array should not be returned by the function, but instead be stored 
    inside the array nums1. To accommodate this, nums1 has a length of m + n, where the 
    first m elements denote the elements that should be merged, and the last n elements are 
    set to 0 and should be ignored. nums2 has a length of n.

    Example 1:
        Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
        Output: [1,2,2,3,5,6]

    Example 2:
        Input: nums1 = [1], m = 1, nums2 = [], n = 0
        Output: [1]

    Example 3:
        Input: nums1 = [0], m = 0, nums2 = [1], n = 1
        Output: [1]
*/

// 1st attempt: time O(m+n) | space O(1)
const merge = function (nums1, m, nums2, n) {
    let i1 = m - 1, i2 = n - 1, tail = m + n - 1;
    while (i2 >= 0) {
        if (i1 >= 0 && nums1[i1] > nums2[i2]) nums1[tail--] = nums1[i1--];
        else nums1[tail--] = nums2[i2--];
    }
};
