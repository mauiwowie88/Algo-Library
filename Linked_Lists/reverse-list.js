/*
Write a function, reverseList, that takes in the head of a linked list as an argument. 

The function should reverse the order of the nodes in the linked list in-place and 

return the new head of the reversed linked list.

You can assum that the input Linked List will always have at least one nodel 

in other words, the head never be null

Input: head = 0 -> 1 -> 2-> 3 -> 4 -> 5 -> null
Output: 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> null

Tip: 
    Import: const { LinkedList } = require('./listOperations');
    Instance: const ll = new LinkedList(); 
    Initialize: const list = ll.initialize([1,2,3,4]);
    Log: console.log(ll.print(list)) -> 1 -> 2 -> 3 -> 4 -> null
*/

// 1st attempt: time O(n) | space O(1)
const reverseIteratively = (head) => {
  let curr = head;
  let prev = null;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// 2nd attempt: time O(n) | space O(n)
const reverseRecursively = (head, prev = null) => {
  if (!head) return prev;
  const next = head.next;
  head.next = prev;
  return reverseRecursively(next, head);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// Iteratively
// O(n) time | O(1) space
const reverseLinkedList1 = (head) => {
  // declare two points. One to keep track of the previous Node and one for the current Node
  let prev = null;
  let current = head;
  while (current) {
    // grab current.next so its not overridden
    const next = current.next;
    current.next = prev; // point current to prev
    // update pointers
    prev = current;
    current = next;
  }
  // return the new head
  return prev;
};

// Recursively
// O(n) time | O(n) space
const reverseLinkedList2 = (head, prev = null) => {
  // base case
  if (head === null) return prev;
  // grab head's next pointer
  const next = head.next;
  // update heads pointer to point to prev
  head.next = prev;
  // return recurisve call with next as head and head as prev
  return reverseLinkedList2(next, head);
};
