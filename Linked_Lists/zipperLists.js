/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
The function should zipper the two lists together into single linked list by alternating nodes. 
If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

Ex: List1 = a -> b -> c -> d -> e
    List2 = x -> y -> z
    output = a -> x -> b -> y -> c -> z -> d -> e -> null
*/
const LinkedList = require('./listsOperations');
const ll = new LinkedList();
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['x', 'y', 'z'];

const list1 = ll.initializeLL(arr1);
const list2 = ll.initializeLL(arr2);

const zipperLists = (head1, head2) => {

}

console.log(zipperLists(arr1, arr2));
