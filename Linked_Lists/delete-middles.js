/* 
You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, 

where ⌊x⌋ denotes the largest integer less than or equal to x.

For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

Input: head = [1,3,4,7,1,2,6]
Output: [1,3,4,1,2,6]
Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node. 

Input: head = [1,2,3,4]
Output: [1,2,4]
Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red.

Input: head = [2,1]
Output: [2]
Explanation:
The above figure represents the given linked list.
For n = 2, node 1 with value 1 is the middle node, which is marked in red.
Node 0 with value 2 is the only node remaining after removing node 1.

Tip: 
    Import: const { LinkedList } = require('./listOperations');
    Instance: const ll = new LinkedList(); 
    Initialize: const list = ll.initialize([1,2,3,4]);
    Log: console.log(ll.print(list)) -> 1 -> 2 -> 3 -> 4 -> null
*/

// 1st attempt: time O(n) | space O(1)
const deleteMiddleNode = (list) => {
  const half = Math.floor(list.size / 2);
  let count = 0;
  let previousNode = null;
  let currentNode = list.head;
  while (count < half) {
    previousNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  previousNode.next = currentNode.next;
  return list;
};

// 2nd attempt: time O(n) | space O(1)
const middle = (list) => {
  const head = list.head;
  if (!head || !head.next) return null;

  let prev = null;
  let slow = head;
  let fast = head.next;
  while (fast !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  list.size--;
  return head;
};

const newList = middle(list);
console.log(ll.print(newList));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// O(n) time | O(1) space
const deleteMiddle = (head) => {
  if (!head || !head.next) return null;
  let prev = null;
  let slow = head;
  let fast = head;
  // find middle of linked list and keep track of prev node
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  // update pointers
  prev.next = slow.next;
  return head;
};
