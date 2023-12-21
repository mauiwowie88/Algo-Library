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

Tip: 
    Import: const { LinkedList } = require('./listOperations');
    Instance: const ll = new LinkedList(); 
    Initialize: const list = ll.initializeList([1,2,3,4]);
    Log: console.log(ll.printList(list1)) -> 1 -> 2 -> 3 -> 4 -> null
*/

// 1st attempt: time O(N + M) | space O(1)
const zipperLists = (head1, head2) => {
    const dummyNode = new Node();
    let tail = dummyNode;
    let current1 = head1;
    let current2 = head2;
    let count = 0;

    while (current1 && current2) {
        if (count % 2 === 0) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
        count += 1;
    }

    if (current1) tail.next = current1;
    if (current2) tail.next = current2;

    return dummyNode.next;
};

// 2nd attempt: 
const zipperLists2 = (head1, head2) => {
    let dummy = new Node;
    let tail = dummy;
    let curr1 = head1;
    let curr2 = head2;

    while (curr1 && curr2) {
        if (curr1) {
            tail.next = curr1;
            tail = tail.next;
            curr1 = curr1.next;
        }
        if (curr2) {
            tail.next = curr2;
            tail = tail.next;
            curr2 = curr2.next;
        }
    }

    if (curr1) tail.next = curr1;
    if (curr2) tail.next = curr2;

    return dummy.next;
};
