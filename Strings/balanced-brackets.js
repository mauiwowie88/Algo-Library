/*
Write a function, befittingBrackets, that takes in a string as an argument.
The function should return a boolean indicating whether or not the string
contains correctly matched brackets.

You may assume the string contains only characters: ( ) [ ] { }
*/

// 1st attempt: time O(n) | space O(n)
const befittingBrackets = (str) => {
  // This queue is to keep track of open brackets in order first in last out
  const queue = [];
  // This is so when we see a closing bracket
  // We compare its value to the last el in queue
  const cache = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  // Loop thru our input str
  for (let i = 0; i < str.length; i++) {
    // Declare the curr value in str
    const curr = str[i];
    // If its a open bracket push it into queue
    if (curr === "(" || curr === "[" || curr === "{") queue.push(curr);
    else {
      // If its closing bracket check if its value in cache !== last el in queue; return false;
      if (cache[curr] !== queue[queue.length - 1]) return false;
      // If it does match just remove last el
      else queue.pop();
    }
  }
  // If you finish looping return true
  return true;
};

// 2nd attempt
function isValid(s) {
  const stack = [];
  const cache = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (cache[curr]) {
      stack.push(curr);
    } else {
      const last = stack[stack.length - 1];
      if (cache[last] === curr) stack.pop();
      else return false;
    }
  }
  return !stack.length;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// O(n) time | O(n) space where n is the length of string
const balancedBrackets = (string) => {
  // declare a dictionary to hold valid characters
  const dict = { "(": ")", "[": "]", "{": "}" };
  // declare stack to track which chars we have seen
  const stack = [];
  for (let char of string) {
    // if the char is in the dictionary, then we want to add its value pair to stack
    if (char in dict) {
      stack.push(dict[char]);
    } else if (char === ")" || char === "}" || char === "]") {
      // if stack is empty, return false
      if (!stack.length) return false;
      // we need to check if the last char that was popped off from stack equals current char
      const lastChar = stack.pop();
      if (char !== lastChar) return false;
    }
  }
  // return true if the stack length is 0
  return stack.length === 0;
};
