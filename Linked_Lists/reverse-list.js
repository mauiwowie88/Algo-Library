/*
Write a function, reverseList, that takes in the head of a linked list as an argument. 

The function should reverse the order of the nodes in the linked list in-place and 

return the new head of the reversed linked list.

You can assum that the input Linked List will always have at least one nodel 

in other words, the head never be null

Input: head = 0 -> 1 -> 2-> 3 -> 4 -> 5 -> null
Output: 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> null

  Tip: Use ll.initializeList([]) to initialize a Linked List using an array
       Use ll.printList() to see a readable linked list
*/

const { LinkedList } = require('./listOperations');
const ll = new LinkedList();

// 1st attempt: time O(n) | space O(1)
const reverseIteratively = (head) => {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
// 2nd attempt: time O(n) | space O(n)
const reverseRecursively = (head, prev = null) => {
    if (!head) return prev;
    const next = head.next;
    head.next = prev;
    return reverseRecursively(next, head);
}
