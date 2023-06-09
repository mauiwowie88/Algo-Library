/* 
Given an array of positive integers, each integer represents how many times to the left or right you can move in the array, no out of bound moves.

Given a starting index, return true if you can reach 0 in the array, otherwise return false

input = [1, 3, 2, 0, 4, 2, 1]
startIdx = 1

output => false

*/


const zero = (arr, i) => {
  // Using Set to store indeces in an object with no repeating indeces
  const visited = new Set();
  // This is our recursive function, using closure to keep track of visited
  const recurse = (arr, i) => {
      // Check if visited has i already stored; If so return false
      if (visited.has(i)) return false;
      // Add curr i to visited obj
      visited.add(i);
      // Store curr arr i value
      const curr = arr[i];
      // Check if curr === 0; If so return true
      if (curr === 0) return true;
      // Checks if i + curr < arr.length && recursivly calling until we find 0; Then return true
      if (i + curr < arr.length && recurse(arr, i + curr)) return true;
      // Checks if i - curr >= 0 && recursivly calling until we find 0; Then return true
      if (i - curr >= 0 && recurse(arr, i - curr)) return true; 
      // If all fails return false;
      return false;
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