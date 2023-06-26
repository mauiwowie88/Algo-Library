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

    const recurse = (open, close) => {
      if (open === close && open === n) {
        res.push(stack.join(""));
        return;
      }

      if (open < n) {
        stack.push("(");
        recurse(open + 1, close);
        stack.pop();
      }

      if (close < open) {
        stack.push(")");
        recurse(open, close + 1);
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


// 3rd attempt:
const generate = (num) => {
  const answer = [];

  const backtracking = (open, close, str) => {
      if (open === close && open === num) {
          answer.push(str);
          return;
      }
      if (open <  num) backtracking(open +1, close, str + '(');
      if (open > close) backtracking(open, close +1, str + ')');
  }
  
  backtracking(0,0,'');
  return answer;
}

