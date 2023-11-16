// Import the classes from the 'linked-list.js' file
const { Node, LinkedList } = require('./LinkedList');

// Create an instance of LinkedList
const myList = new LinkedList();

// Create instances of Node and add them to the linked list
const node1 = new Node(1);
myList.head = node1;
myList.tail = node1;
myList.size++;

const node2 = new Node(2);
myList.tail.next = node2;
myList.tail = node2;
myList.size++;

// Now you can use myList and the nodes as needed
console.log(myList);
