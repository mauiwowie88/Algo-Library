const asciitree = require('asciitree');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// class Tree {
//     constructor() {
//         this.root = null;
//     }

//     insert(data) {
//         if (Array.isArray(data)) {
//             if (!this.root) {
//                 const curr = data.shift();
//                 const newNode = new Node(curr);
//                 this.root = newNode;
//             }
//             for (const num of data) {
//                 const newNode = new Node(num);
//                 this.insertNode(this.root, newNode);
//             }
//         } else {
//             const newNode = new Node(data);
//             this.root = this.insertNode(this.root, newNode);
//         }
//         return this.root;
//     }

//     insertNode(node, newNode) {
//         console.log(node, newNode)
//         if (!node) return newNode;
//         if (node.value > newNode.value) {
//             node.left = this.insertNode(node.left, newNode);
//         } else {
//             node.right = this.insertNode(node.right, newNode);
//         }
//         return this.root;
//     }

// }


class Tree {

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

    inOrderTraversal(node) {
        if (node) {
            inOrderTraversal(node.left);
            console.log(node.value);
            inOrderTraversal(node.right);
        }
    }
}


// Call inOrderTraversal with the root of your tree



const arr = [5, 3, 6, 7, 5, 1, 2];

const tree = new Tree();

console.log(tree.insert(arr))
// console.log(tree.inOrderTraversal(tree.root));
// tree.insertNode(4)
// // console.log(root)