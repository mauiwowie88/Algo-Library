/*
    Implement a basic linked list class with insertion and deletion operations. 
    The class should have methods for inserting a node at the beginning, at the end, 
    or at a specified index, as well as retrieving a node's value at a given index, 
    removing a node at a specific index, clearing the entire list, creating a linked
    lists using an array and a method to display the linked lists in a readable format.
    
    Tip: 
        Import this to any file you need to use Linked List operations.
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
    initializeList(arr) {
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
    printList(input) {
        let head;
        if (input.head === undefined) head = input;
        else head = input.head;
        let str = "";
        while (head) {
            str += head.value + " -> ";
            head = head.next;
        }
        return str + head;
    }
}


module.exports = { Node, LinkedList };