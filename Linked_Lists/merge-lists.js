/*
Merge two sorted linked lists.
The returned merged linked list should be in incrementing order.

Ex: List1 = 1 -> 3 -> 3 -> 5 -> 5 -> null
    List2 = -2 -> 4 -> 6 -> 9 -> 10 -> null
    output = -2 -> 1 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 9 -> 10 -> null

  Tip: Use ll.initializeList([]) to initialize a Linked List using an array
       Use ll.printList() to see a readable linked list
*/
const { Node, LinkedList } = require('./listOperations');

const ll = new LinkedList();
const node = new Node();

// 1st attempt: time O(N + M) | space O(1)
const mergeSortedLists = (head1, head2) => {
  const dummyNode = node;
  let tail = dummyNode;
  let current1 = head1;
  let current2 = head2;
  while (current1 && current2) {
    if (current1.value < current2.value) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1) tail.next = current1;
  if (current2) tail.next = current2;

  return dummyNode.next;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// O(n) time | O(1) space
const mergeLists = (head1, head2) => {
  const dummyNode = node;
  let tail = dummyNode;
  let current1 = head1;
  let current2 = head2;

  while (current1 || current2) {
    const val1 = current1 ? current1.val : Infinity;
    const val2 = current2 ? current2.val : Infinity;
    if (val1 < val2) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  return dummyNode.next;
};