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
    arr.forEach((num, i) => arr[i] = product / num);
    return arr;
}


/////////////////////////////////////////////////////////////////////
/* Algo God Approach
    This is how Zack the Free Man didit.
    looks like he uses tthe new keyword on the prouctts var
    To create a new array with the input length filled with 1s
    Has a left var we dont know what its doing yet.
    .. ill coome back to this..
*/



// O(n) time | O(n) space
const arrayOfProducts3 = (array) => {
    // declare products array and fill with 1
    const products = new Array(array.length).fill(1);
    // calculate left running product
    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
      products[i] *= leftRunningProduct;
      leftRunningProduct *= array[i];
    }
    // calculate right running product
    let rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
      products[i] *= rightRunningProduct;
      rightRunningProduct *= array[i];
    }
    return products;
  };
  
  // O(n) time | O(n) space
  const arrayOfProducts4 = (array) => {
    const leftProducts = new Array(array.length).fill(1);
    const rightProducts = new Array(array.length).fill(1);
    for (let i = 1; i < leftProducts.length; i++) {
      leftProducts[i] = array[i - 1] * leftProducts[i - 1];
    }
    for (let i = array.length - 2; i >= 0; i--) {
      rightProducts[i] = array[i + 1] * rightProducts[i + 1];
    }
    const output = [];
    for (let i = 0; i < array.length; i++) {
      output[i] = leftProducts[i] * rightProducts[i];
    }
    return output;
  };