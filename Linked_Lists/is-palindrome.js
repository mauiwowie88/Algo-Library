/*
Given head of linked list, determine if it is a palindrome.

Do in O(n) time | O(1) space

a -> b -> c -> c -> b -> a
a <- b <- c   c -> b -> a
1 -> 0 -> 1
     s    f

  Tip: Use ll.initializeList([]) to initialize a Linked List using an array
       Use ll.printList() to see a readable linked list

 */

const { Node, LinkedList } = require('./listOperations');
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
