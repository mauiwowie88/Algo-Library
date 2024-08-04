/*
 Write a function that accepts a positive number n.
 The function should console log a step shape
 with n levels using the # character.
 Make sure the steps spaces are on the right.
 
 Ex:
  steps(2) --> '# '
               '##'

  steps(4) --> '#   '
               '##  '
               '### '
               '####'
*/

function steps(num) {
  const result = [];
  for (let i = 1; i <= num; i++) {
    result.push("#".repeat(i) + " ".repeat(num - i));
  }
  return result;
}

console.log(steps(4));
