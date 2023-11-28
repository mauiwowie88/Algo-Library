/*

Given an integer array nums, find a subarray that
has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


*/
const largestSub = (arr) => {

}

console.log(largestSub([1, 2, 3, 4, -1, 2, 6, 19]))







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// O(n) time | O(1) space
const maxProduct = (nums) => {
  // delcare current min, current max variables and max variable
  let currentMin = 1;
  let currentMax = 1;
  let max = -Infinity;
  // loop through array
  for (let num of nums) {
    // grab old min to make sure you dont lose reference
    const min = currentMin;
    // update min and max at each point
    currentMin = Math.min(num * currentMin, num * currentMax, num);
    currentMax = Math.max(num * min, num * currentMax, num);
    max = Math.max(max, currentMin, currentMax);
  }

  return max;
};


/*
  let output = [];
let start;
let curr = 1;
let highest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    if (start === undefined) start = i;
    curr *= arr[i]
  } else {
    if (curr > highest) {
      output = arr.slice(start, i);
      highest = curr
    }
    start = i + 1;
    curr = 1;
  }
}

if (highest < curr) {
  output = arr.slice(start);
}
return output
*/