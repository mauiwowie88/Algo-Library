/* 
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array

array = [5, 1, 4, 2]
output = [8, 40, 10, 20]

-Approaches: {
    we have to ccreate our output variable
    we have to loop thru the input arrray
    for reassigning each el vvv
        1. eaach iteration we could multiply every other remaining number 
        then pass in outcome to the output array current index.
}
*/


/*  PSUEDO | 1st attempt
    *** we have a nested loop making this O(n^2) space 0(n)***
    I looped thru the arr 
    And on each iteration i spliced everything before and after curr el
    And put each array in a new array
    Then looped thru the new array reducinig each array
    Each time we reduce we multiply all the numbeers
    As we fill oour output arr with the product of each array
*/

const array = [5, 1, 4, 2];

const arrayOfProducts = (arr) => {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        const firstHalf = arr.slice(0, i);
        const secondHalf = arr.slice(i + 1, arr.length);
        const fullArr = [...firstHalf, ...secondHalf]
        const product = fullArr.reduce((total, num) => total * num, 1)
        output.push(product);
    }
    return output;
}

/*  PSUEDO
    *** 2nd attempt gott a hint from chatgpt by accidentt ***
    This approach we multiply every number in the input arr and store in a var
    We then loop trhu the input array
    And we reassign each num to the product divided by current number
*/

const arrayOfProducts2 = (arr) => {
    const product = arr.reduce((total, num) => total * num, 1)
    const looper = arr.forEach((num, i) => {
        arr[i] = product / num;
    });
    return arr;
}

console.log(arrayOfProducts2(array))