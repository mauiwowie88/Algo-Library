/*
Merge two sorted linked lists.
The returned merged linked list should be in incrementing order.
*/

const arr1 = [1,1,2,4,5,8];
const arr2 = [2,3,3,3,6,9];

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// This creates a our linked list from an array
const initializeLL = arr => {
    const head = new Node(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        curr.next = newNode;
        curr = curr.next;
    }
    return head;
}
// Makes a copy of a linked list
const copyList = (head) => {
    if (head === null) return null;
    const newNode = new Node(head.val);
    newNode.next = copyList(head.next);
    return newNode;
}
// This helps print out a readable linked list
const printLL = head => {
    let curr = head;
    let str = "";
    while(curr) {
        str += curr.val + " -> ";
        curr = curr.next;
    }
    return str + curr;
}

const list1 = initializeLL(arr1)
const list2 = initializeLL(arr2);



const mergeInOrder = (list1, list2) => {

}

console.log(mergeInOrder(list1, list2))
console.log(printLL(list1))
console.log(printLL(list2))








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/

// O(n) time | O(1) space
const mergeLists = (head1, head2) => {
    const dummyNode = new Node(null);
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