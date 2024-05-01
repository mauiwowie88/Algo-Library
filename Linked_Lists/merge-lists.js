/*
Merge two sorted linked lists.
The returned merged linked list should be in incrementing order.

Ex: List1 = 1 -> 3 -> 3 -> 5 -> 5 -> null
    List2 = -2 -> 4 -> 6 -> 9 -> 10 -> null
    output = -2 -> 1 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 9 -> 10 -> null

Tip: 
    Import: const { LinkedList, Node } = require('./listOperations');
    Instance: const ll = new LinkedList(); 
    Initialize: const list = ll.initialize([1,2,3,4]);
    Log: console.log(ll.print(list)) -> 1 -> 2 -> 3 -> 4 -> null
*/

const { LinkedList, Node } = require("./LinkedList");
const list = new LinkedList();
const list1 = list.initialize([1, 2, 3, 4]);
const list2 = list.initialize([1, 1, 3, 5]);

// 1st attempt: time O(N + M) | space O(1)
const merge = (head1, head2) => {
  const dummyNode = new Node();
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

// 2nd attempt:
const merge2 = (head1, head2) => {
  if (!head1) return head2;
  if (!head2) return head1;

  if (head1.value < head2.value) {
    head1.next = merge(head1.next, head2);
    return head1;
  } else {
    head2.next = merge(head1, head2.next);
    return head2;
  }
};

// 3rd attempt:
const merge3 = (head1, head2) => {
  const dummyNode = new Node();
  let curr = dummyNode;
  let one = head1;
  let two = head2;
  while (one && two) {
    if (one.value < two.value) {
      curr.next = one;
      one = one.next;
    } else {
      curr.next = two;
      two = two.next;
    }
    curr = curr.next;
  }
  curr.next = one || two;

  return dummyNode.next;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// O(n) time | O(1) space
const mergeLists = (head1, head2) => {
  const dummyNode = new Node();
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
