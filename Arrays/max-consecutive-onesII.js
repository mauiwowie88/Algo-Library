/* 
Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

Input: nums = [1,0,1,1,0]
Output: 4
Explanation: 
- If we flip the first zero, nums becomes [1,1,1,1,0] and we have 4 consecutive ones.
- If we flip the second zero, nums becomes [1,0,1,1,1] and we have 3 consecutive ones.
The max number of consecutive ones is 4.

Input: nums = [1,0,1,1,0,1]
Output: 4
Explanation: 
- If we flip the first zero, nums becomes [1,1,1,1,0,1] and we have 4 consecutive ones.
- If we flip the second zero, nums becomes [1,0,1,1,1,1] and we have 4 consecutive ones.
The max number of consecutive ones is 4.

*/

// 1st attempt
const longest = (arr) => {
  // This it to keep track of the longest consecutive 1s
  let longest = [];
  // This is to keep track of our curr consecutive 1s
  let curr = [];
  // This is to check if weve already flipped a 0
  let flipped = false;
  // This is to keep track of our last 0 index
  let last0;
  // Loop thru arr
  for (let i = 0; i < arr.length; i++) {
      // Store our curr num in arr
      const currNum = arr[i];
      // Check if currNum === 1 push it to curr arr
      if (currNum === 1) curr.push(currNum);
      else {
          // First check if weve already flipped a zero
          if (!flipped) {
              // If we havent yet, push num to curr arr
              curr.push(currNum);
              // Now flip to true, this is our first 0
              flipped = true;
              // Store our curr 0 index in a var
              last0 = i;
          // If weve alredy flipped a zero; that means this is our second 0
          } else {
              // So first we check if our curr arr is longer than our longest arr; if so reassign longest
              if (curr.length > longest.length) longest = curr;
              // Then convert flipped back to false 
              flipped = false;
              // And reassing curr to a shorter version where the arr starts right after last 0
              curr = curr.slice(last0);
          }
      }
  }
  // Once were done looping, we check one last time if curr > longest; if so reassign longest
  if (curr.length > longest.length) longest = curr;
  // Finally we return the longest consecutive arr length
  return longest.length;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Algo God Approach
    This is how Zack the Free Man didit.
*/


// Approach: Sliding Window
// O(n) time | O(1) space
const findMaxConsecutiveOnes = (nums) => {
    let numOnes = 0;
    let maxOnes = 0;
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
      numOnes += nums[r];
      // condition where window is not valid => length of window is larger than numOnes + k
      while (r - l + 1 > numOnes + 1) {
        numOnes -= nums[l++];
      }
      
      maxOnes = Math.max(maxOnes, r - l + 1);
    }
    return maxOnes;
  };