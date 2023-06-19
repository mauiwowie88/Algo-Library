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