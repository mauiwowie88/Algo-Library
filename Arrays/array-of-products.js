/* 
Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array

array = [5, 1, 4, 2];
output = [8, 40, 10, 20];

Approaches: [nested loop,];

*/

const array = [5, 1, 4, 2];

// 1st atempt: time O(n^2) | space 0(n)
const arrayOfProducts = (arr) => {
  // declare our output
  const output = [];
  // initiate a for loop
  for (let i = 0; i < arr.length; i++) {
      // store everythiing before curr num in a var
      const firstHalf = arr.slice(0, i);
      // store everything after curr num in a var
      const secondHalf = arr.slice(i + 1, arr.length);
      // store in a var the two arrays concated; withtout curr num
      const fullArr = firstHalf.concat(secondHalf);
      // using reduce, looped thru fullArr multiplying everything but curr num
      const product = fullArr.reduce((total, num) => total * num, 1)
      // and push into output the product of every num except curr 
      output.push(product);
  }
  // return output
  return output;
}

// 2nd attempt: time O(n) | space 0(1)
const arrayOfProducts2 = (arr) => {
    // Loop thru arr and multiply everything together store in a var
    const product = arr.reduce((total, num) => total * num, 1)
    // Loop trhu arr reassigning each curr num to : product / currNum
    arr.forEach((num, i) => arr[i] = product / num);
    // return updated array
    return arr;
}


////////////////////////////////////////////////////////////////////////////////////////////////

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