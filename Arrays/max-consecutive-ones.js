/* 
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Input: nums = [1,0,1,1,0,1]
Output: 2

*/

// 1st attempt: |
const binary = (arr) => {
  // This keeps track of 1s in queue
  let queue = [];
  // This is to keep all arrays of consecutive ones
  const output = [];
  // Loop over arr
  for (const num of arr) {
      // If num === 1 push num onto queue
      if (num === 1) queue.push(num)
      // If num === 0 push queue into output and clear queue
      else {
          output.push(queue);
          queue = [];
      }
  }
  // Once done push queue into output
  output.push(queue);
  // Then return the output sorted from shortest to longest and remove the last el length
  return output.sort((a,b) => a.length-b.length).pop().length
}


// 2nd attempt: |
const longest = (arr) => {
  // This is to keep track of curr consecutives 1s
  let curr = 0;
  // This is to keep track of the overall highest
  let highest = 0;
  // Loop over arr
  for (const num of arr) {
      // If num === 1 increment curr
      if (num === 1) curr++;
      // Else check if curr is > than highest; if so highest = curr
      else {
          if (highest < curr) highest = curr;
          // Then refresh curr
          curr = 0;
      }
  }
  // Once done looping check one more time if curr is > highest; if so reassign hgihest
  if (highest < curr) highest = curr;
  // And return highest
  return highest;
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Algo God Approach
    This is how Zack the Free Man didit.
*/


// Approach: Sliding Window
// O(n) time | O(1) space
const findMaxConsecutiveOnes = (nums) => {
    let numOnes = 0;
    let l = 0;
    let maxOnes = 0;
    for (let r = 0; r < nums.length; r++) {
      numOnes += nums[r];
  
      while (r - l + 1 > numOnes) {
        numOnes -= nums[l++];
      }
  
      maxOnes = Math.max(maxOnes, r - l + 1);
    }
    return maxOnes;
  };