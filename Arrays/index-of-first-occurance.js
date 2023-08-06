/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

// 1st approach: time O(M * N) | space O(1)
const haystack = (stack, needle) => {
	let j = 0;
	let output = -1;
	for (let i = 0; i < stack.length; i++) {
		if (!needle[j]) return output;
		if (stack[i] === needle[j]) {
			if (output === -1) output = i;
			j++;
		} else if (output >= 0) {
			output = -1;
			j = 0;
		}
	}
	return output;
};

// 2nd attempt: time O(M * N) | space O(1)
const haystack2 = (stack, needle) => {
	for (let i = 0; i < stack.length; i++) {
		let j = 0;
		while (needle[j] && stack[i + j] === needle[j]) j++;
		if (!needle[j]) return i;
	}
	return -1;
};
