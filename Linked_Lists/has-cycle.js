/*
Determine if linked list has cycle

Tip: 
    Import: const { LinkedList } = require('./listOperations');
    Instance: const ll = new LinkedList(); 
    Initialize: const list = ll.initializeList([1,2,3,4]);
    Log: console.log(ll.printList(list)) -> 1 -> 2 -> 3 -> 4 -> null
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(1) space
const hasCycle = (head) => {
    // declare fast and slow pointers
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        // if slow === fast there is a cycle, return true
        if (slow === fast) return true;
    }
    return false;
};