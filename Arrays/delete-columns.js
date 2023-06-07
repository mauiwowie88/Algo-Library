/*
You are given an array of n strings strs, all of the same length.

The strings can be arranged such that there is one on each line, making a grid.
For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
abc
bce
cae

You want to delete the columns that are not sorted lexicographically.
In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted,
while column 1 ('c', 'a', 'e') is not, so you would delete column 1.

Return the number of columns that you will delete.

Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.

Input: strs = ["a","b"]
Output: 0
Explanation: The grid looks as follows:
  a
  b
Column 0 is the only column and is sorted, so you will not delete any columns.
*/

const strs = ["abc", "bce", "cae"];

// 1st approach: time O(n * m * log(m)) | space O(m)
const columns = (arr) => {
    // Var to keep track of the changing arr.length
    let strsLeft = arr.length;
    // Simple for of
    for(const str of arr) {
        // Store the curr str sorted
        const currSorted = str.split('').sort().join('');
        // Compare if sorted str == to regular str; if so subtract one from length
        if (currSorted === str) strsLeft--;
    }
    // Return number of strs left
    return strsLeft;
}


// 2nd attempt: time O(n * m) | space O(m)
const deleteColumns = (arr) => {
    // A var for number of deleted strs
    let deleted = 0;
    // Loop trhu arr
    for(const str of arr) {
        // Var is to keep track if str is sorted one or two ways
        let checker = [0, 0];
        // Make a copy of the str as an arr
        const copy = str.split('');
        // Loop while copy has a length
        while(copy.length) {
            // Remove and store last el in copy
            const last = copy.pop();
            // Check if last var is < curr copy last || if checker[0] && checker[1] > 0
            if (copy[copy.length-1] === last || checker[0] > 0 && checker[1] > 0) {
                // If so increment deleted
                deleted++;
                // Break out while loop
                break;
            } 
            // Else if curr copy last < last var; increment checker[0]
            else if (copy[copy.length-1] < last) checker[0]++;
            // Else if curr copy last > last var; increment checker[1]
            else checker[1]++;
        }
    }
    // Once done with for loop return number of deleted strs
    return deleted;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
    second one is a better version of what i came up with.
*/


// O(n*m) time | O(1) space where n is length of the array and m is the length of the string
const minDeletionSize = (strs) => {
    // declare count variable
    let count = 0;
    // loop through strs starting with columns
    for (let col = 0; col < strs[0].length; col++) {
      // start row loop at row 1 and compare letters
      for (let row = 1; row < strs.length; row++) {
        // compare letters
        if (strs[row][col] < strs[row - 1][col]) {
          count++;
          break;
        }
      }
    }
    return count;
  };
  
  
  // O(m*n*log(n)) time | O(m) space
  const minDeletionSize2 = (strs) => {
    // declare variable count to be 0
    let count = 0;
    // loop through strs starting with columns
    for (let col = 0; col < strs[0].length; col++) {
      let tempStr = [];
      for (let row = 0; row < strs.length; row++) {
        tempStr.push(strs[row][col]);
      }
      // check if reversed string equal to temp str
      if (tempStr.join("") !== tempStr.sort().join("")) {
        count++;
      }
    }
    return count;
  };