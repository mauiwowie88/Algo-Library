/*
    Given an array of nums of n intergers and an integer target, find the 
    two integers in nums such that the sum is closest to the target. 
    Return the sum of the two integers. You may assume that each input would 
    have exactly one solution, and that the array will hav at least two elements.

    Ex: 
        nums = [2, -2, 1] and target = 4           // (2 + 1 = 3)
        nums = [2, -3, -6, 7, 4] and target = 3    // (-3 + 7 = 4)
        nums = [3, 1, 4, 3] and target = 6         // (3 + 3 = 6)
*/

const closest = (arr, target) => {
    const sorted = arr.sort((a, b) => a - b);
    let closest = Infinity;
    let i = 0, j = sorted.length - 1;
    while (i < j) {
        const sum = sorted[i] + sorted[j];
        if (Math.abs(target - sum) < Math.abs(target - closest)) closest = sum;
        sum < target ? i++ : j--;
    }
    return closest;
} 
