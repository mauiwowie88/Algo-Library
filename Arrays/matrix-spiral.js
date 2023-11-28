/*
    Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies 
    inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should 
    return that array. Analyze the time and space complexities of your solution.

    Ex: 
        input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                                [6,    7,   8,  9,   10],
                                [11,  12,  13,  14,  15],
                                [16,  17,  18,  19,  20] ]

        output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]


                              ---------------------------> 
                              [[1,    2,   3,   4,     5],|
                             ---------------------->      |
                            ^  [6,    7,   8,   9,  | 10],|
                            |                       |     |
                            |  [11,   12,  13,  14, v 15],|
                            |         <--------------     |
                            |  [16,   17,   18, 19,   20]]|
                            <---------------------------  v
*/

// 1st attempt: time O(n) | spaceO(n)
function spiralCopy(arr) {
    const output = [];
    let left = 0;
    let right = arr[0].length - 1;
    let top = 0;
    let bottom = arr.length - 1;

    while (left <= right && top <= bottom) {
        // Traverse top row
        for (let i = left; i <= right; i++) {
            output.push(arr[top][i]);
        }
        top++;

        // Traverse right column
        for (let i = top; i <= bottom; i++) {
            output.push(arr[i][right]);
        }
        right--;

        // Check if there's a bottom row to traverse
        if (top <= bottom) {
            // Traverse bottom row
            for (let i = right; i >= left; i--) {
                output.push(arr[bottom][i]);
            }
            bottom--;
        }

        // Check if there's a left column to traverse
        if (left <= right) {
            // Traverse left column
            for (let i = bottom; i >= top; i--) {
                output.push(arr[i][left]);
            }
            left++;
        }
    }

    return output;
}
