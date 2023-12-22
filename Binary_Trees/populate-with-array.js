/*
    Create a Binary Search Tree with an input array,
    then traverse the Binary Search Tree and return 
    a sorted array of all the Tree Node values.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if (Array.isArray(data)) {
            if (!this.root) this.root = new Node(data.shift());
            for (const value of data) {
                const newNode = new Node(value);
                this.insertNode(this.root, newNode)
            }

        } else {
            const newNode = new Node(data);
            this.insertNode(newNode);
        }
        return this.root;
    }


    insertNode(node, newNode) {
        if (!node) return newNode;
        if (node.value > newNode.value) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    toArray(root) {
        let output = [];
        function traverse(node) {
            if (!node) return;
            output.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right)
        }
        traverse(root);
        return output.sort();
    }

}
