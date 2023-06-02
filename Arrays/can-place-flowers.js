/* 
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Input: flowerbed = [1,0,0,0,0,1], n = 2
Output: false


1st: [
    This is a newbie attempt, i will loop thru the initial array while creating a new one
    i check if the curr before and number after are all 0 that means theres is space left
    i wll also checkk our new updated array see if the last item is 0 then we passed the criteria
    so then we will push into our new array a 1 representing a flower
    else we will just push a 0 and contnue
    at the end of the loop we compare wether there was enough flowers planted or not
];
2nd: [];
3rd: [];
*/

const array = [1,0,0,0,1];

function flowerBed(arr, num) {
    const newBed = [arr[0]];
    let total = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 0 && arr[i-1] === 0 && 
            arr[i+1] === 0 && newBed[newBed.length-1] === 0) {
            newBed.push(1)
            total += 1;
        } else {
            newBed.push(0);
        }     
    }
    return total === num;
}
console.log(flowerBed(array))



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.
    second one is a better version of what i came up with.
*/




// O(n) time | O(1) space
const canPlaceFlowers = (flowerbed, n) => {
    for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
        if (
          (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) ||
          (flowerbed[i - 1] === undefined && flowerbed[i + 1] === 0) ||
          (flowerbed[i + 1] === undefined && flowerbed[i - 1] === 0) ||
          (flowerbed[i - 1] === undefined &&
            flowerbed[i + 1] === undefined &&
            flowerbed[i] === 0)
        ) {
          flowerbed[i] = 1;
          n--;
        }
      }
    }
  
    return n <= 0;
  };
  
  // O(n) time | O(n) space
  const canPlaceFlowers2 = (flowerbed, n) => {
    const flowers = [0, ...flowerbed, 0];
    for (let i = 1; i < flowers.length - 1; i++) {
      if (flowers[i - 1] === 0 && flowers[i] === 0 && flowers[i + 1] === 0) {
        flowers[i] = 1;
        n -= 1;
      }
    }
    return n <= 0;
  };