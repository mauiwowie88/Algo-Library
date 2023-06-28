/*
Write a function that takes in a strings and returns whether or not it is a palindrome
*/

// 1st attempt: O(n) | space O(n)
const palindrome1 = (str) => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 2nd attempt: time O(n) | space O(1)
const palindrome2 = (str) => {
    // This is our stopping point,
    // Were using the two pointer technique
    const half = Math.floor(str.length / 2);
    // Keep track of curr last index
    let last = str.length - 1;
    // Loop thru input str
    for (let i = 0; i <= half; i++) {
        // If curr letter !== curr last; not actual last
        if (str[i] !== str[last]) return false;
        // If they're equal subtract from last to loop from the end to the middle
        else last--;
    }
    // If you finish looping, you found the palindrome; return true
    return true;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/


// Approach: Iterative
// O(n) time | O(1) space
const isPalindrome = (string) => {
    let l = 0;
    let r = string.length - 1;
    while (l <= r) {
      if (string[l] !== string[r]) return false;
      l++;
      r--;
    }
    return true;
  };
  
  // Approach: Recursive
  // O(n) time | O(n) space where n is length of string
  const isPalindrome2 = (string, i = 0, j = string.length - 1) => {
    if (i > j) return true;
    if (string[i] !== string[j]) return false;
    return isPalindrome2(string, i + 1, j - 1);
  };