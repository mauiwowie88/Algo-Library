/* 
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously 

following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer 

is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

*/

const { Node, LinkedList } = require('./listOperations');
const ll = new LinkedList();

const list = ll.initializeList([1, 2, 3, 4, 5, 6, 7, 8, 9])

ll.createCycle = function (position) {
    if (position <= 0) return;

    let current = this.head;
    let cycleStart = null;
    let index = 0;

    while (current.next) {
        if (index === position) cycleStart = current;
        current = current.next;
        index++;
    }

    if (cycleStart) current.next = cycleStart;

    return this.head;
}


ll.createCycle(4)
console.log(list)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// O(n) time | O(1) space where n is the number of nodes in linked list
const detectCycle = (head) => {
    let slow = head;
    let fast = head;
    let firstIteration = true;
    while (slow !== fast || firstIteration) {
        if (!fast || !fast.next) return null;
        slow = slow.next;
        fast = fast.next.next;
        firstIteration = false;
    }

    slow = head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};


// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
// g.next = h;
// h.next = f;
