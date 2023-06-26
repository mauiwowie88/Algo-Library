/*
Given n pairs of parentheses, write a function to generate all combinations ofo well-formed parentheses.

For example, given n = 3, a solution set is:

    [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()",
    ]
 */

// 1st attempt:
const genP = (n) => {
    const stack = [];
    const res = [];

    const recurse = (oN, cN) => {
      if (oN === cN && oN === n) {
        res.push(stack.join(""));
        return;
      }

      if (oN < n) {
        stack.push("(");
        recurse(oN + 1, cN);
        stack.pop();
      }

      if (cN < oN) {
        stack.push(")");
        recurse(oN, cN + 1);
        stack.pop();
      }
    };
    recurse(0, 0);
    return res;
}

// 2nd attempt:
const gen = (n)=> {
    let solution = [];
    
    const recurse = (left, right, str) => {
      if (left > right) return;
      if (!left && !right) solution.push(str);
      if (left > 0) recurse(left -1, right, str + '(');
      if (right > 0) recurse(left,right-1, str + ')');
    }
    recurse(n,n,'');
    return solution;
  }
