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

-Approaches: {
    [hash map, greedy approach, two pointers]
    1. My understading is well bee given an array and an input numberr
        The array holds thee wieght of each perrson and 
        The input number is the weight limit of each boat
        So nmy initial thinking is to sort the array
        To make it easier to find
    2. First we gotta create the object filled with input elements
        So we loop thru input array and create key vaalue pairs
        Wherre the key is the curr num and value is limit - curr
}

Input: people = [3,2,2,1,3,2,2,1,1], limit = 3
Boats: 6
Explanation: (3)(3)(2,1)(2,1)(2,1)(2)

Input: people = [3,5,3,4], limit = 5
Boats: 4
Explanation: (3)(3)(4)(5)

[1,3,2,2,8,6,7] (10) = [9,7,8,8,2,4,3]
1,2,2,3,6,7,8] [6] = []

1st: [];
2nd: [];
3rd: [];
*/

const array1 = [3,2,2,1,3,2,2,1,1];
const array2 = [3,5,3,4];

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