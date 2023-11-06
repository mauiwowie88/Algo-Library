/*
 Implement a class with basic linked list listOperations like insertion and deletion. 
 The class should have methods for inserting a node at the beginning, at the end, 
 or at a specified index, as well as retrieving a node's value at a given index, 
 removing a node at a specific index, clearing the entire list, creating a deep copy, 
 creating a LL using an array and a method to display the linked lists in a readable format.
 Ex: 1 -> 3 -> 2 -> 6 -> 5 -> null
*/

const { LinkedList, Node } = require("./linked-list");

const listOperations = LinkedList;
// Insert new node as the head
listOperations.insertFirst = function (value) {
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
};
// Insert new node as the tail
listOperations.insertLast = function (value) {
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
};
// Insert new node in specified index
listOperations.insertAt = function (value, index) {
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
};
// Return value in specified index
listOperations.getAt = function (index) {
    if (index < 0 || index >= this.size) return 'This index is out of range.';
    if (isNaN(index)) return 'Index is not a number';
    if (index === 0) return this.head.value;
    if (index === this.size - 1) return this.tail.value
    let curr = this.head;
    let count = 0;
    while (count < index) {
        curr = curr.next;
        count++;
    }
    return curr.value;
};
// Remove node in specified index
listOperations.removeAt = function (index) {
    if (index < 0 || index >= this.size) return 'This index is out of range.';
    if (isNaN(index)) return 'Index is not a number';
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return "Removed node at index 0";
    }

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
};

// Delete linked list
listOperations.deleteList = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

// Create a linked list with input array
listOperations.initializeList = function (arr) {
    if (!arr.length) return "Array is empty.";

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
};
// Create a deep copy 
listOperations.deepCopy = function (head) {
    let copy = head;
    let curr = null;
    let tail = null;

    while (copy) {
        const newNode = new Node(copy.value);

        if (!curr) curr = newNode;
        else tail.next = newNode;

        tail = newNode;
        copy = copy.next;
    }

    return curr;
}

// Print linked list in readable format
listOperations.printList = function (head) {
    let curr = head ? head : this.head;
    let str = "";
    while (curr) {
        str += curr.value + " -> ";
        curr = curr.next;
    }
    return str + curr;
};

// const linkedList = new operations();

// linkedList.insertFirst(4);
console.log('linkedList')

module.exports = listOperations;