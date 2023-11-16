

const { Node } = require('./LinkedList');
const ListMethods = require('./ListMethods')

// Create instances of Node and add them to the linked list
const node1 = new Node(1);
const myList = ListMethods;
myList.head = node1;
myList.tail = node1;
myList.size++;

const node2 = new Node(2);
myList.tail.next = node2;
myList.tail = node2;
myList.size++;

// Now you can use myList and the nodes as needed
myList.insertFirst(199)
console.log(myList.head);
