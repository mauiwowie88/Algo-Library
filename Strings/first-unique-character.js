/*
Given a string s, find the first non-repeating character in it and return its index.
If it does not exist, return -1.

Input: s = "leetcode"
Output: 0

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
*/

// 1st attempt: time O(n) | O(n)
const firstUnique = (str) => {
  // This will store every letter and how many times its repeated
  const cache = {};
  // Loop thru the input str
  for (let i = 0; i < str.length; i++) {
     // Store curr letter of str
      const curr = str[i];
      // If cache already has letter increment value
      if (cache[curr]) cache[curr]++;
      // Else create a key with the letter and value = 1
      else cache[curr] = 1;
  }
  // Once cache is full, lets loop thru it
  for (const key in cache) {
      // Check if curr key value === 1; if so return its index
      if (cache[key] === 1) return str.indexOf(key);
  }
  // Once done looping, no match found; return -1
  return -1;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/


// O(n) time | O(1) space becuase there are 26 letters in alphabet
const firstUniqChar = (s) => {
    // create map of counts
    const counts = {};
    for (let char of s) {
      counts[char] = (counts[char] || 0) + 1;
    }
    // loop through s and check count in counts map and if 1 return
    for (let i = 0; i < s.length; i++) {
      if (counts[s[i]] === 1) return i;
    }
    return -1;
  };