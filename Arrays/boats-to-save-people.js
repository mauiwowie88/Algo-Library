/* 

 Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)

Input: people = [3,2,2,1,3,2,2,1,1], limit = 3
Boats: 6
Explanation: (3)(3)(2,1)(2,1)(2,1)(2)

Input: people = [3,5,3,4], limit = 5
Boats: 4
Explanation: (3)(3)(4)(5)

[1,3,2,2,8,6,7] (10) = [9,7,8,8,2,4,3]
1,2,2,3,6,7,8] [6] = []

*/

const array1 = [3,2,2,1,3,2,2,1,1];
const array2 = [3,5,3,4];

// 1st attempt: time O(n log n) | space O(1)
const boats = (array, limit) => {
    array.sort((a, b) => a - b);
    let front = 0;
    let back = array.length - 1;
    let count = 0;
    while (front <= back) {
      const remaining = limit - array[r];
      back--;
      count++;
      if (remaining >= array[front] && front <= back) {
        front++;
      }
    }
    return count;
}

console.log(boats(array1, 10))




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/