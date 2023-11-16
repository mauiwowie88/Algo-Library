/*
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/


// 1st attempt: time | space
const sortKMessedArray = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        let bef = i - 1;

        while (bef >= 0 && arr[bef] > curr) {
            arr[bef + 1] = arr[bef];
            bef--;
        }

        arr[bef + 1] = curr;
    }
    return arr;
}





console.log(sortKMessedArray([2, 1, 3, 8, 5, 4, 7, 6, 9, 10]))


















// function sortKMessedArray(arr, k) {
//     for (let i = 1; i < arr.length; i++) {
//         let curr = arr[i];
//         let x = i - 1;

//         while (x >= 0 && arr[x] > curr) {
//             arr[x + 1] = arr[x];
//             x--
//             console.log(x)
//         }

//         arr[x + 1] = curr;
//         console.log(arr)
//     }
//     return arr;
// }