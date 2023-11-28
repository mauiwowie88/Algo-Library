/*
    Step 1: Write a function that takes a string of text and returns 
    true if the parentheses are balanced and false otherwise

    Ex:
        balanced("(")   // false
        balanced("()")  // true
        balanced(")(")  // false
        balanced("(())")// true

    Step 2: Make your solution work for all types of brackets

    Ex: 
        balanced("[]{}()")  // true
        balanced("([{}])")  // true
        balanced("(][){}")  // false

    Step 3: Ignore any non-bracket characters
    
    Ex: 
        balanced(" const wow = { yo: thisIsAwesome() }; ")         // true
        balanced(" const newton = () => { telescopes.areSicc(); ") // false
*/

// 1st attempt: time O(n) | space O(n)
const balanced = (str) => {
    const filo = [];
    const cache = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        if (cache[curr]) filo.push(curr);
        else if (curr === '}' || curr === ')' || curr === ']') {
            if (cache[filo[filo.length - 1]] === curr) filo.pop();
            else return false;
        }
    }

    return str.length && !filo.length;
}
