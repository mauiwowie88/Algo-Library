/*
Write a function called minSubArrayLen which accepts two parameters — an array of positive integers and a positive integer. The function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the intger passed in. If there isn’t one, return 0.
Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2
minSubArrayLen([2,1,6,5,4], 9) // 2
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5
minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0
*/

// 1st attempt: time O(n) | space O(1)
const minSubArrayLen = (arr, num) => {
	// Stores the current sum of elements in the subarray
	let sum = 0;
	// This is to keep track of the beginning of the subarray
	let left = 0;
	// This is to keep track of the end of the subarray
	let right = 0;
	// This is our output; our lowest subarray
	let lowest = Infinity;
	// While the left pointer still points in the array
	while (arr[left]) {
		// Check if right pointer is in arr and if sum is curr < num
		if (arr[right] && sum < num) {
			// If so sum hasn't reached num we add right most el to sum
			sum += arr[right];
			// And increment right by one
			right++;
			// Else if sum is >= num
		} else if (sum >= num) {
			// Then find lowest between curr lowest and right - lowest === subArray.length
			lowest = Math.min(lowest, right - left);
			// Reassing sum to sum - left most el
			sum -= arr[left];
			// And decrease left by one
			left++;
			// If the sum is still less than num and the right pointer is out of bounds, we break the loop
		} else break;
	}
	// If the lowest is still Infinity, it means no subarray was found, so we return 0; else return lowest
	return lowest === Infinity ? 0 : lowest;
};
