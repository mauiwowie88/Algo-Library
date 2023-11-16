/**
 * Implement quick sort
*/
// 1st attempt: time O(n^2) | space O(n)
const sort = (arr) => {
  const len = arr.length;
  if (len < 2) return arr;

  const pivot = arr[Math.floor(len / 2)];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (curr === pivot) continue;
    if (curr < pivot) left.push(curr);
    else right.push(curr);
  }
  return [...sort(left), pivot, ...sort(right)];
}

const sort2 = (arr) => {
  // Find median of arr
  const median = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    let actualMedian = Math.floor((min + max) / 2);
    let checker = Infinity;
    let closest = 0;

    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      if (actualMedian > curr) {
        if (actualMedian - curr < checker) {
          checker = actualMedian - curr;
          closest = curr;
        }
      } else {
        if (curr - actualMedian < checker) {
          checker = curr - actualMedian;
          closest = curr;
        }
      }

    }
    return closest;
  }

  const recurse = (arr) => {
    const len = arr.length;
    if (len < 2) return arr;
    const pivot = median(arr);
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      const curr = arr[i];
      if (curr === pivot) continue;
      if (curr < pivot) left.push(curr);
      else right.push(curr);
    }
    return [...recurse(left), pivot, ...recurse(right)];
  }
  return recurse(arr)
}

console.log(sort2([2, 1, 3, 8, 5, 4, 7, 6, 9, 10]));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// O(nlog(n)) time | O(log(n)) space
const quickSort = (array) => {
  _quickSort(array, 0, array.length - 1);
  return array;
};

const _quickSort = (array, startIdx, endIdx) => {
  // base case if startIdx > endIdx return
  if (startIdx > endIdx) return;
  // declare pivot, left and right indexes
  const pivot = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  while (leftIdx <= rightIdx) {
    if (array[leftIdx] > array[pivot] && array[rightIdx] < array[pivot]) {
      // swap
      [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
    }
    if (array[rightIdx] >= array[pivot]) rightIdx--;
    if (array[leftIdx] <= array[pivot]) leftIdx++;
  }
  // swap pivot with right idx becuase we know it will be smaller than the pivot
  [array[pivot], array[rightIdx]] = [array[rightIdx], array[pivot]];
  // recursivelt call function with two partitions with an optimization of calling it first on the smaller subarray
  const leftSmaller =
    rightIdx - 1 - startIdx < endIdx - (rightIdx + 1) ? true : false;
  if (leftSmaller) {
    _quickSort(array, startIdx, rightIdx - 1);
    _quickSort(array, rightIdx + 1, endIdx);
  } else {
    _quickSort(array, rightIdx + 1, endIdx);
    _quickSort(array, startIdx, rightIdx - 1);
  }
};