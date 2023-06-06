/*
Write a function, pairSum, that takes in an array and a target sum as arguments.
The function should return an array containing a pair of indices whose elements sum to the given target.
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
*/

const twoSum = (arr, target) => {
    // Create cache to store all nums
    const cache = {};
    // Initiate for loop
    for (let i = 0; i < arr.length; i++) {
        // Store the diff between target and curr num
        const diff = target - arr[i];
        // Check if the cache has arr[diff]; target - arr[diff] = num
        if (cache[diff]) {
            // If so we've found our match; push into array and return
            cache[diff].push(i)
            return true;
        }
        // Otherwise create key val pair
        else cache[num] = [i];
    }
    // Just in case no match found; return false.
    return false;
}

