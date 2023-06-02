/**
 * You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

Input: salary = [1000,2000,3000]
Output: 2000.00000
Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
Average salary excluding minimum and maximum salary is (2000) / 1 = 2000


1st: [
    we could screte a var that is thee arrat sorted with the first and last el removed
    loop trhu it multiplyiing everything then divde by length at the end of loop
]
 */


function averageSalary(arr) {
    const copy = arr.sort().slice(1,arr.length-1);
    const product = copy.reduce((a, c) => a + c, 0);
    return product / 2;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/



// O(n) time | O(1) space
const average = (salary) => {
    const min = Math.min(...salary);
    const max = Math.max(...salary);
    let sum = 0;
    for (let num of salary) {
      if (num === min || num === max) continue;
      sum += num;
    }
    return sum / (salary.length - 2);
  };
