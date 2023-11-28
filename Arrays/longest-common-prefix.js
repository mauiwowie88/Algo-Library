/*
    Write a dfunction to find the longet common prefix string amongst 
    an array of strings. If there is no common prefix, return an empty 
    string. (Note: There is always an input and always in lowercase letters)
    
    Ex: 
        longest(["flower", "flow", "flight"])     -->  "fl"
        longest(["dog", "cat", "bird"])           -->  ""
        longest(["start", "star", "almost"])      -->  ""
*/

// 1st attempt: time | space
const longestPrefix = (arr) => {
    const sorted = arr.sort((a, b) => b.length - a.length);
    const shortest = sorted.pop();
    let i = 0;
    for (; i < shortest.length; i++) {
        const prefix = shortest.substring(0, i + 1);
        if (!sorted.every(str => str.startsWith(prefix))) break;
    }
    return shortest.substring(0, i);
}

// 2nd attempt: time | space
const longest = (arr) => {
    return arr.reduce((pre, str) => {
        let i = 0;
        while (i < pre.length && i < str.length && pre[i] === str[i]) {
            i++;
        }
        return pre.slice(0, i);
    });
}
