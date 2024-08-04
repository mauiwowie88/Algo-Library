/*
Write a function that returns a number of vowels used in a string.

Ex:
 vowels("Hi There!") --> 3
 vowels("str") --> 0
*/

// function vowels(str) {
//   return str.replace(/[^aeiouAEIOU]/g, "").length;
// }

const vowels = (str) => str.replace(/[^aeiouAEIOU]/g, "").length;
