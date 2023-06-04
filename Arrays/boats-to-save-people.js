/* 
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

 Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)

*/

const array1 = [3,2,2,1,3,2,2,1,1];
const array2 = [3,5,3,4];

// 1st attempt: time O(n log n) | space O(1)
const boats = (array, limit) => {
    // Made coopy of array sorted
    const copy = array.sort((a, b) => a - b);
    // This is our front pointer that traverses forward on the array
    let front = 0;
    // This is our back pointer that traverses backward on the array
    let back = copy.length - 1;
    // 
    let count = 0;
    while (front <= back) {
      const remaining = limit - copy[back];
      back--;
      count++;
      if (remaining >= copy[front] && front <= back) front++;
    }
    return count;
}

console.log(boats(array1, 10))




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
    Approach: Sort and greedy/two pointer approach approach
    O(nlog(n)) time | O(1) space where n is the length of people array
*/



const numRescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;
  let count = 0;
  while (l <= r) {
    const remaining = limit - people[r];
    r--;
    count++;
    if (remaining >= people[l] && l <= r) {
      l++;
    }
  }
  return count;
};