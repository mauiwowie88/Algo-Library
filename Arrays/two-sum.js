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

// 1st attempt: time O(n) | space O(n)
const twoSum = (arr, target) => {
    // Cache to store visited numbers
    const cache = new Map();
    // Loop thru input arr
    for (let i = 0; i < arr.length; i++) {
      // Store the diff between target and curr num
      const diff = target - arr[i];
      // If cache has the diff; we found match return indeces
      if (cache.has(diff)) return [cache.get(diff), i];
      // Else store curr num and its index
      else cache.set(arr[i], i);
    }
    // If you reach this no matches found; return false
    return false;
}