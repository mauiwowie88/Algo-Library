/* 
You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.


*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
*/

// O(n) time | O(n) space
const flatten = (head) => {
    if (!head) return null;
    const dummyNode = new Node(0, head, null, null);
    _flatten(head, dummyNode);
    dummyNode.next.prev = null;
    return dummyNode.next;
};

const _flatten = (current, prev) => {
    // base case
    if (!current) return prev;
    const next = current.next;
    // update pointers
    prev.next = current;
    current.prev = prev;
    // get the tail
    const tail = _flatten(current.child, current);
    // update child to be null;
    current.child = null;
    return _flatten(next, tail);
};