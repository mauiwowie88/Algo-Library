// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class List {
//   constructor(head = null) {
//     this.head = new Node(head);
//   }

//   insert(value) {
//     const node = new Node(value);
//     if (!this.head) this.head = node;
//     else {
//         let curr = this.head;
//         while(curr !== null) {
//         }
//     }
//     return 'Done';
//   }

//   traverse() {
//     let curr = this.head;
//     while (curr !== null) {
//       console.log(curr.value);
//       curr = curr.next;
//     }
//     return "Finished";
//   }
// }

// const list = new List(4);
// console.log(list.traverse());

// // class Tree {
// //     constructor() {
// //         this.root = null;
// //     }

// //     insert(data) {
// //         if (Array.isArray(data)) {
// //             if (!this.root) {
// //                 const curr = data.shift();
// //                 const newNode = new Node(curr);
// //                 this.root = newNode;
// //             }
// //             for (const num of data) {
// //                 const newNode = new Node(num);
// //                 this.insertNode(this.root, newNode);
// //             }
// //         } else {
// //             const newNode = new Node(data);
// //             this.root = this.insertNode(this.root, newNode);
// //         }
// //         return this.root;
// //     }

// //     insertNode(node, newNode) {
// //         console.log(node, newNode)
// //         if (!node) return newNode;
// //         if (node.value > newNode.value) {
// //             node.left = this.insertNode(node.left, newNode);
// //         } else {
// //             node.right = this.insertNode(node.right, newNode);
// //         }
// //         return this.root;
// //     }

// // }

// class Tree {
//   insert(data) {
//     if (Array.isArray(data)) {
//       if (!this.root) this.root = new Node(data.shift());
//       for (const value of data) {
//         const newNode = new Node(value);
//         this.insertNode(this.root, newNode);
//       }
//     } else {
//       const newNode = new Node(data);
//       this.insertNode(newNode);
//     }
//     return this.root;
//   }

//   insertNode(node, newNode) {
//     if (!node) return newNode;
//     if (node.value > newNode.value) {
//       if (node.left === null) node.left = newNode;
//       else this.insertNode(node.left, newNode);
//     } else {
//       if (node.right === null) node.right = newNode;
//       else this.insertNode(node.right, newNode);
//     }
//   }

//   inOrderTraversal(node) {
//     if (node) {
//       inOrderTraversal(node.left);
//       console.log(node.value);
//       inOrderTraversal(node.right);
//     }
//   }
// }

// function doSomething() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // Other things to do before completion of the promise
//       console.log("Did something");
//       // The fulfillment value of the promise
//       resolve("https://example.com/");
//     }, 900);
//   });
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const builder = (arr) => {
  const list = new List();
  let curr;
  for (const num of arr) {
    const newNode = new Node(num);
    if (!list.head) {
      list.head = newNode;
      curr = list.head;
      list.size++;
    } else {
      curr.next = newNode;
      curr = curr.next;
      list.size++;
      list.tail = newNode;
    }
  }
  return list;
};
const list1 = builder([1, 2, 3, 4, 5]);

const printer = (list) => {
  let output = "";
  let curr = list.head;
  while (curr !== null) {
    output += curr.value + " -> ";
    curr = curr.next;
  }
  return (output += "null");
};

// console.log(printer(list1));
const isPalindrome = function (x) {
  const str = String(x);
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(-121));
