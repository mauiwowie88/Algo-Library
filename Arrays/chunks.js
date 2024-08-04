/*
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

Ex:
 chunk([1,2,3,4], 2) --> [[1,2],[3,4]]
 chunk([1,2,3,4,5,6,7], 4) --> [[1,2,3,4],[5,6,7]]
 chunk([1,2,3], 1) --> [[1],[2],[3]]
*/

// 1st attempt: time O(n) | space O(n)
function chunk(arr, size) {
  const result = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, index + size));
    index += size;
  }
  return result;
}
