/*
Given head of linked list, determine if it is a palindrome.

Do in O(n) time | O(1) space

a -> b -> c -> c -> b -> a
a <- b <- c   c -> b -> a
1 -> 0 -> 1
     s    f

Tip: 
    Import: const { LinkedList } = require('./listOperations');
    Instance: const ll = new LinkedList(); 
    Initialize: const list = ll.initialize([1,2,3,4]);
    Log: console.log(ll.print(list)) -> 1 -> 2 -> 3 -> 4 -> null

*/

const { Node, LinkedList } = require("./listOperations");
const ll = new LinkedList();

// 1st attempt: time O(n) | space O(1)
const palindrome = (list) => {
  const head = list.head;
  const copy = head;
  const half = Math.floor(list.size / 2);
  let count = 0;

  let curr = copy;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  while (head && count < half) {
    let curr = head.value;
    let reversedVal = prev.value;
    if (curr !== reversedVal) return false;
    count++;
  }

  return true;
};

// 2nd attempt: time O(n) | space O(n)
const palin = (list) => {
  const arr = [];
  let head = list.head;

  while (head) {
    arr.push(head.value);
    head = head.next;
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }

  return true;
};

const list = ll.initialize([1, 2, 3, 4, 5, 6, 4, 3, 2, 1]);
// 3rd attempt:
const palindromic = (list) => {
  let fast = list.head;
  let slow = list.head;
  let tail = null;

  while (fast.next && fast.next.next & slow) {
    fast = fast.next.next;

    const next = slow.next;
    slow.next = tail;
    tail = slow;
    slow = next;
  }
  console.log(slow);

  const loopSecondHalf = (head, tail) => {
    if (!head || !tail) return true;
    if (head.value !== tail.value) return false;
    console.log([head.value, tail.value]);
    return loopSecondHalf(head.next, tail.next);
  };

  return loopSecondHalf(tail, slow);
};

console.log(palindromic(list));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// Approach: Reverse the second half of the linked list and determine if palindrome

// O(n) time | O(1) space
const isPalindrome = (head) => {
  // get the middle of the linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let prev = null;
  let curr = slow;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // traverse at each pointer and check if values are equal
  let curr1 = head;
  let curr2 = prev;
  while (curr2) {
    if (curr1.val !== curr2.val) return false;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  return true;
};
