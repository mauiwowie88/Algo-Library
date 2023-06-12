/* 
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
Can you implememnt the queue such that each operation is O(1)
*/




// 2nd attempt:
class Queue {
  constructor() {
    this.pushStack = [];
    this.popStack = []; 

  }
  push(num) {
    this.pushStack.push(num);
    return this.pushStack;
  }
  pop() {
    if (!this.popStack.length) {
      while(this.pushStack.length) {
        const curr = this.pushStack.pop();
        this.popStack.push(curr);
      }
    }
    return this.popStack.pop()
  }

  peek() {
    if (this.popStack.length) return this.popStack[this.popStack.length-1];
    return pushStack[0];
  }

  empty() {
    return !this.pushStack.length && !this.popStack.length;
  }
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Algo God Approach
    This is how Zack the Free Man didit.
*/


class MyQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    push(val) {
      this.stack1.push(val);
    }
  
    pop() {
      // if stack2 is empty you need to tranfers all numbers from stack1 to 2
      if (!this.stack2.length) {
        while (this.stack1.length) {
          const valRemoved = this.stack1.pop();
          this.stack2.push(valRemoved);
        }
      }
      return this.stack2.pop();
    }
  
    peek() {
      if (this.stack2.length) {
        return this.stack2[this.stack2.length - 1];
      } else {
        return this.stack1[0];
      }
    }
  
    empty() {
      return !this.stack1.length && !this.stack2.length;
    }
  }

