/* 
Given a string s and an integer k, return the number of substrings in s of length k with no repeated characters.

Input: s = "havefunonleetcode", k = 5
Output: 6
Explanation: There are 6 substrings they are: 'havef','avefu','vefun','efuno','etcod','tcode'.

Input: s = "home", k = 5
Output: 0
Explanation: Notice k can be larger than the length of s. In this case, it is not possible to find any substring.

*/

// 1st attempt: time O(n) | O(1)
const substring = (str, k) => {
  // This is to keep track of all subs with no repeating chars
  let count = 0;
  // This is to keep track of the index of the last el in string length of 5
  let temp = k;
  // Simple for loop iterating thru input str
  for (let i = 0; i < str.length; i++) {
      // This is to store the substring; which is the str sliced from i with lenght of 5
      const sliced = str.slice(i, temp++);
      // If curr substring length === 5
      if (sliced.length === 5) {
          // We create our cache to keep track of repeats
          const cache = {};
          // This will let us know if we find repeats
          let repeats = false;
          // Loop thru our substring
          for (let j = 0; j < sliced.length; j++) {
              // Store our curr el as curr
              const curr = sliced[j];
              // Check if curr el exists in cache
              if (cache[curr]) {
                  // If true repeats = true
                  repeats = true;
                  // And break out of loop
                  break;
              }
              // If not just store in cache
              else cache[curr] = 1;
          }
          // Once done looping; we check if no repeats then increment count
          if (!repeats) count++;
      }
  }
  // Return our final count
  return count;
}


// 2nd attempt: time O(nk) | space O(1)
const substring2 = (str, k) => {
  // This is to keep track of all subs with no repeating chars
  let count = 0;
  // This is to keep track of the index of the last el in string length of 5
  let temp = k;
  // Simple for loop iterating thru input str
  for (let i = 0; i < str.length; i++) {
      // This is to store the substring; which is the str sliced from i with lenght of 5
      const sliced = str.slice(i, temp++);
      // This creates an object filled with sliced str letters and no repeats
      const non = new Set(sliced);
      // Makes curr obj into an arr
      const curr = [...non];
      // Check if curr arr === 5; if so increment count
      if (curr.length === 5) count++;
  }
  // Return our final count
  return count;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/


// Approach: Sliding Window
// O(n) time | O(1) space
const numKLenSubstrNoRepeats = (s, k) => {
    // if k is bigger than s return 0
    if (k > s.length) return 0;
    const chars = new Array(26).fill(0);
    // initialize window
    let multipleChars = 0;
  
    for (let r = 0; r < k; r++) {
      const idx = s[r].charCodeAt() - 97;
      chars[idx]++;
      if (chars[idx] > 1) multipleChars++;
    }
  
    let count = multipleChars === 0 ? 1 : 0;
    // continue on
    let l = 1;
    for (let r = k; r < s.length; r++) {
      const leftIdx = s[l - 1].charCodeAt() - 97;
      const rightIdx = s[r].charCodeAt() - 97;
      // decrement leftIdx char
      chars[leftIdx]--;
      // if chars is greater than or equal to one that means we need to decrement multiple chars
      if (chars[leftIdx] >= 1) multipleChars--;
      // increment rightIdx
      chars[rightIdx]++;
      if (chars[rightIdx] > 1) multipleChars++;
      if (multipleChars === 0) count++;
      // increment l
      l++;
    }
    return count;
  };