/* 
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

*/

const array = [-1,-2,-3,-4,3,2,1];
const array2 = [1,5,0,2,-3];
const array3 = [-1,1,-1,1,-1];

// 1st attempt: time complexity O(n) | space complexity 0(1)
function signFunc(x) {
    // Initialize product / output to 1
    let product = 1;
    // Initialize a for loop
    for (const num of x) {
        // If num ever = 0 return 0
        if (num === 0) return 0
        // Else just multiply curr num to product
        product *= num;
    }
    // Once done looping return product
    return product < 0 ? -1 : 1;
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// O(n) time | O(1) space
const arraySign = (nums) => {
    let negativeNums = 0;
    for (let num of nums) {
      if (num === 0) return 0;
      if (num < 0) negativeNums++;
    }
    return negativeNums % 2 === 0 ? 1 : -1;
  };
  
  // Approach: Keep track of the sign at each iteration
  // O(n) time | O(1) space
  const arraySign2 = (nums) => {
    let sign = 1;
    for (let num of nums) {
      if (num === 0) return 0;
      if (num < 0) {
        sign *= -1;
      }
    }
    return sign;
  };