/*
Implement a function meetingPlanner that given the availability, slotsA and slotsB, 
of two people and a meeting duration dur, returns the earliest time slot that works 
for both of them and is of duration dur. If there is no common time slot that satisfies 
the duration requirement, return an empty array.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the
number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch 
array of size two. The first epoch in a pair represents the start time of a slot. 
The second epoch is the end time of that slot. The input variable dur is a positive 
integer that represents the duration of a meeting in seconds. 
The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability 
are disjointed, i.e, time slots in a person’s availability don’t overlap. 
Further assume that the slots are sorted by slots’ start time.

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: [] # since there is no common slot whose duration is 12
*/

// 1st attempt: time O(min(m,n)) | space O(1)
function meetingPlanner(slotsA, slotsB, dur) {
    // These are used to track each slots array individually
    let aI = 0;
    let bI = 0;
    // We will loop thru both slots simutansely 
    while (slotsA[aI] && slotsB[bI]) {
        // Declare our current slots
        const a = slotsA[aI];
        const b = slotsB[bI];
        // Check which first index is greater; the greater one will be used to check wether it will fit with the other slots time frame
        const start = Math.max(a[0], b[0]);
        // This is to store the duration starting from the beginning of potential time frames
        const duration = start + dur;
        // This is to determine the end of a potential meeting
        const end = Math.min(a[1], b[1]);
        // Check wether the duration fits within the correct time frame; if so return time frame array
        if (duration <= end) return [start, duration];
        // Otherwise check which second index is larger; the smaller one's slot counter will incremenet
        if (a[1] > b[1]) bI++;
        else aI++;
    }
    // Once we have looped thru both time slots we have concluded there is no correct time to meet; return empty array
    return [];
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

module.exports = {
    Node,
    LinkedList
};

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

// 1st attempt: STILL UNDER DEVELOPMENT
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

const cycle = list.createCycle(5);

console.log(list.printList(cycle))

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


/*
 Implement a basic linked list class with insertion and deletion operations. 
 The class should have methods for inserting a node at the beginning, at the end, 
 or at a specified index, as well as retrieving a node's value at a given index, 
 removing a node at a specific index, clearing the entire list, creating a linked
 lists using an array and a method to display the linked lists in a readable format.
 Ex: 1 -> 3 -> 2 -> 6 -> 5 -> null
*/


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
        return `Inserted ${value} in the beginning.`;
    }

    // Insert last node
    insertLast(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
        return `Inserted ${value} at the end.`;
    }
    // Insert at index
    insertAt(value, index) {
        if (index < 0 || index > this.size) return 'This index is out of range.';
        if (isNaN(index)) return 'Index is not a number';
        if (index === 0) return this.insertFirst(value);
        if (index === this.size) return this.insertLast(value);

        const node = new Node(value);
        let previousNode = null;
        let currentNode = this.head;
        let count = 0;

        while (count < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }

        node.next = currentNode;
        previousNode.next = node;

        this.size++;
        return `Inserted ${value} at index ${index}.`;
    }

    // Get at index
    getAt(index) {
        if (index < 0 || index > this.size) return 'This index is out of range.';
        if (isNaN(index)) return 'Index is not a number';
        if (index === 0) return this.head.value;
        if (index === this.size) return this.tail.value;

        let curr = this.head;
        let count = 0;

        while (count < index) {
            curr = curr.next;
            count++;
        }
        return curr.value;
    }

    // Remove at index
    removeAt(index) {
        if (index < 0 || index > this.size) return 'This index is out of range.';
        if (isNaN(index)) return 'Index is not a number';

        let previousNode = null;
        let currentNode = this.head;
        let count = 0;

        while (count < index) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            count++;
        }
        previousNode.next = currentNode.next;
        this.size--;
        return `Removed node at index ${index}.`;
    }

    // Clear list
    deleteList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Create list using an array
    initializeLL(arr) {
        if (arr.length === 0) return "Array is empty.";

        if (!this.head) {
            this.head = new Node(arr[0]);
            let curr = this.head;
            this.size = 1;

            for (let i = 1; i < arr.length; i++) {
                let newNode = new Node(arr[i]);
                curr.next = newNode;
                curr = curr.next;
                this.size++;
            }

            this.tail = curr;
            return this;
        } else {
            const newLL = new LinkedList();
            newLL.head = new Node(arr[0]);
            let curr = newLL.head;
            newLL.size = 1;

            for (let i = 1; i < arr.length; i++) {
                let newNode = new Node(arr[i]);
                curr.next = newNode;
                curr = newNode;
                newLL.size++;
            }

            newLL.tail = curr;
            return newLL;
        }
    }

    // Print readable list
    printListData(head) {
        let curr = head ? head : this.head;
        let str = "";
        while (curr) {
            str += curr.value + " -> ";
            curr = curr.next;
        }
        return str + curr;
    }
}


module.exports = LinkedList;