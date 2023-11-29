/*
    Given a string s consisting of words and spaces, return the length of the last word in the string.

    A word is a maximal substring consisting of non-space characters only.

    Example 1:
        Input: s = "Hello World"
        Output: 5

    Example 2:
        Input: s = "   fly me   to   the moon  "
        Output: 4

    Example 3:
        Input: s = "luffy is still joyboy"
        Output: 6
*/


const lengthOfLastWord = function (s) {
    const trimmed = s.trim();
    return trimmed.slice(trimmed.lastIndexOf(' ') + 1).length;
};
