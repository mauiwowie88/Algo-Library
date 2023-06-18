/* 
Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.

Input: arr1 = [197,418,523,876,1356], arr2 = [501,880,1593,1710,1870], arr3 = [521,682,1337,1395,1764]
Output: []

*/

// 1st attempt
const allThree = (arr1, arr2, arr3) => {
  const cache = {}
  const output = []
  const all = [arr1, arr2, arr3]
  const checker = (arr) => {
      for (const num of arr) {
          if (cache[num]) cache[num]++
          else cache[num] = 1
      }
  }
  all.map(arr => checker(arr))
  for (const num in cache) {
      if (cache[num] >= 3) output.push(Number(num))
  }
  return output
}

// 2nd attempt
const all3 = (arr1, arr2, arr3) => {
  const cache = {}
  const output = []
  arr1.map(num => cache[num] = 1)
  arr2.map(num => cache[num] ? cache[num]++ : cache[num] = 1)
  arr3.map(num => cache[num] ? cache[num]++ : cache[num] = 1)
  for (const num in cache) {
      if (cache[num] >= 3) output.push(Number(num))
  }
  return output
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Algo God Approach
    This is how Zack the Free Man didit.
*/


// O(n) time | O(1) space
const arraysIntersection = (arr1, arr2, arr3) => {
    const output = [];
  
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
  
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
      if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
        output.push(arr1[p1]);
        p1++;
        p2++;
        p3++;
      } else {
        if (arr1[p1] < arr2[p2]) {
          p1++;
        } else if (arr2[p2] < arr3[p3]) {
          p2++;
        } else {
          p3++;
        }
      }
    }
  
    return output;
  };