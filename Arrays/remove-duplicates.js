/*
Given an integer array nums sorted in non-decreasing order, 
remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in
*/

// 1st attempt: time O(N log N) | space O(N)
const dups = (num) => {
	const stringy = String(num).split("").sort();
	return Array.from(new Set(stringy)).join("");
};
