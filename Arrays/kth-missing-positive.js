/* 
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

*/

// 1st attempt: |
const missing = (arr, num) => {
    // This is to store all the missing nums
    let missing = [];
    // To keep track of kth positive integer
    let counter = num;
    // Reverse arr to usse pop intstead of shift
    const reversed = [...arr].reverse();
    // For loop until you find all missing nums
    for (let i = 1; i <= Infinity; i++) {
        // This is the curr last el in reversed arr
        const last = reversed[reversed.length-1];
        // If counter ever 0; return the last missing num
        if (!counter) return missing.pop();
        // If curr i === last; remove the last el 
        if (i === last) reversed.pop();
        // Else decrease counter & push num to missing
        else {
            counter--
            missing.push(i)
        }
    }
    // If we make it to this line, we're in an alternate reality
    return 'Really?';
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Algo God Approach
    This is how Zack the Free Man didit.
*/


const findKthPositive = (arr, k) => {};


/**
 

class Node {
    constructor(value) {
      this.value = value || null;
      this.right = null;
      this.left = null;
    }
  }
  
  class BTS {
    constructor() {
      this.root = null;
    }
  
    insert(val) {
      if (!isNaN(val)) {
        return this.addNum(val);
      }
      if (Array.isArray(val)) {
        return this.addArr(val);
      }
      if (typeof val === 'string') {
        return this.addStr(val);
      }
    }

    addNum(num) {
        const insertNode = (node, value) => {
          if (value < node.value) {
            if (node.left === null) node.left = new Node(value);
            else return insertNode(node.left, value);
          } else if (value > node.value) {
            if (node.right === null) node.right = new Node(value);
            else insertNode(node.right, value);
          } else return;
        };
      
        if (!this.root) this.root = new Node(num);
        else insertNode(this.root, num);
    }
      

    addArr(arr) {
      for (const val of arr) {
        this.insert(val);
      }
    }
  
    addStr(str) {
      // Implement the logic to add string values to the tree
      console.log('Adding string:', str);
    }
  }
  
 */



