/* 
Given an array of positive integers, each integer represents how many times to the left or right you can move in the array, no out of bound moves.

Given a starting index, return true if you can reach 0 in the array, otherwise return false

input = [1, 3, 2, 0, 4, 2, 1]
startIdx = 1

output => false

*/


const zero = (arr, i) => {
  const curr = arr[i];
  const front = arr[i + curr] === 0 ? 0 : arr[i + curr];
  const back = arr[i - curr] === 0 ? 0 : arr[i - curr];

  if (front === 0 || back === 0) return true;

  console.log(front, back)
  // if (front) return findZero(arr, i + curr);
  // if (back) return findZero(arr, i - curr);

  return false;
};

const zero2 = (arr, i) => {
  const cache = {};

  const recurse = (arr, i) => {
      const curr = arr[i];
      if (curr === 0) return true;
      cache[i] = 0;
      
      console.log(cache)
      return recurse(arr, ++i)
  };

  return recurse(arr, i);
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
    second one is a better version of what i came up with.
*/



// Approach: DFS. Marking value as negative when visited
// O(n) time | O(1) space. The stack will never be more than 2 elements, so it is constant space
const findZero = (array, idx) => {
    const stack = [idx];
    while (stack.length) {
      const current = stack.pop();
      if (array[current] === 0) return true;
      const neighborOne = current + array[current];
      const neighborTwo = current - array[current];
      array[current] *= -1;
      if (neighborOne < array.length && array[neighborOne] >= 0)
        stack.push(neighborOne);
      if (neighborTwo >= 0 && array[neighborTwo] >= 0) stack.push(neighborTwo);
    }
    return false;
  };
  
  // Approach: DFS
  // O(n) time | O(n) space
  const findZero2 = (array, idx) => {
    const visited = new Set();
    const stack = [idx];
    while (stack.length) {
      // grab current index
      const currentIdx = stack.pop();
      if (array[currentIdx] === 0) return true;
      // explore neighbors
      const neighborOne = currentIdx + array[currentIdx];
      const neighborTwo = currentIdx - array[currentIdx];
      // if valid neighbor add to stack and mark as visited
      if (
        neighborOne >= 0 &&
        neighborOne < array.length &&
        !visited.has(currentIdx)
      ) {
        visited.add(currentIdx);
        stack.push(neighborOne);
      }
  
      if (
        neighborTwo >= 0 &&
        neighborTwo < array.length &&
        !visited.has(currentIdx)
      ) {
        visited.add(currentIdx);
        stack.push(neighborTwo);
      }
    }
    // return fale if you exit while loop
    return false;
  };