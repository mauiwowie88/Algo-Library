/**
 The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0 
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.

Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3
 */

// 1st attempt: time O(n) | space O(n)
const schoolLunch = (students, sandwiches) => {
  // Queue that keeps track of student preferred types
  const queue = {};
  // Store all leftOvers for output
  let leftOvers = 0;
  // Loop thru the students to create our queue of {circle:?, square:?}
  for (const type of students) {
      // Check if queue[type] already exists; if so ++
      if (queue[type]) queue[type]++;
      // Else create and initialize to 1
      else queue[type] = 1;
  }
  // Loop thru sandwhiches trying to give them all away
  for (const type of sandwiches) {
      // Check if queue[type] value is > 0; if so --
      if (queue[type] > 0) queue[type]--; 
  }
  // Loop thru keys in queue to add all the leftOver sandwhiches
  for (const keys in queue) {
      // Add each types leftOvers to leftOvers
      leftOvers += queue[keys];
  }
  // Once complete return
  return leftOvers;
}

// 2nd atttempt: timie O(n) | space O(n)
const lunchTime = (students, sandwiches) => {
  // Var to keep track of student types; count[0] == circular && count[1] == squared
  const count = [0, 0];
  // Loop thru students
  for (const student of students) {
    // Increment the count for the student's preferred sandwich type
    count[student]++; 
  }
  // Loop trhu sandwhiches
  for (const sandwich of sandwiches) {
    // Check if count[sandwhich] value is > 0; if so --
      if (count[sandwich] > 0) count[sandwich]--; 
  }
  // Return the sum of remaining counts as the number of students unable to eat
  return count[0] + count[1]; 
};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/


// O(n) time | O(n) space
const countStudents = (students, sandwiches) => {
    let count = 0;
    let idx = 0;
    while (count !== students.length) {
      if (sandwiches[idx] === students[0]) {
        idx++;
        students.shift();
        count = 0;
      } else {
        const removedStudent = students.shift();
        students.push(removedStudent);
        count++;
      }
    }
    return count;
  };