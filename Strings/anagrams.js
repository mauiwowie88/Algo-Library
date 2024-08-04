/*
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity/ Only consider characters, not spaces
or punctuation. Consider capital letter to be the same as lower case.

Ex:
 anagram('maui wowie','Wowie Maui!') --> true
 anagram('RAIL! SAFETY..','fairy tales') --> true
 anagram('Hi there','bYe ! tHere') --> true
*/

// 1st attempt: time O(n log n) | space O(n)
// Sorted strings and checked each corresponding index
function anagramArr(str1, str2) {
  const simplify = (str) =>
    str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
  return simplify(str1) === simplify(str2);
}

// 2nd attempt: time O(n) | space O(n)
// Created objects for each string: Key = letter, Value = number of occurences
// Compared both objects key and value pairs
function anagramObj(str1, str2) {
  const store = (str) => {
    const cache = {};
    const newStr = str.toLowerCase().replace(/[\W]/g, "");
    for (let char of newStr) {
      cache[char] = cache[char]++ || 1;
    }
    return cache;
  };
  const one = store(str1);
  const two = store(str2);
  if (Object.keys(one).length !== Object.keys(two).length) return false;
  for (let key in one) {
    if (one[key] !== two[key]) return false;
  }
  return true;
}
