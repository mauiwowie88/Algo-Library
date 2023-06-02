/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


1st: [
  im thnking we loop thrru the arr 
  on each iteration we check if number one is bigger, if so continue
  elsse we subtractt number two from one and store as highestt difference];
2nd: [
  this approach ill have a loweest curr num and a highest diff
  lookp thru the input arr
  each iteerattion we check if the difference between right number and left 
  is greater than our current highest diff
  and also check if there is a new lowest num reassign it
  eventually youre left with the highest diff and return it
  This is how itll look as we loop
  [2,8,1,8,6,9]; // [6,2] [6,1] [7,1] [7,1] [8,1]
  [2,8,1,3,9,5]; // [6,2] [6,1] [6,1] [8,1] [8,1]];
3rd: [];

*/


const array = [2,9,3,7,6,8];
//  time complexity is O(n) | space complexity is O(1),
const stockPrices = (arr) => {
    let highestDiff = 0;
    let lowestNum = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < lowestNum) lowestNum = arr[i];
        if (arr[i] - lowestNum > highestDiff) highestDiff = arr[i] - lowestNum;
    }
    return highestDiff;
}

const stockPrices2 = (arr) => {
  let totalProfit = 0;
  let currProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) {
      currProfit = arr[i] - arr[i-1];
      totalProfit += currProfit;
    }
  }
}

console.log(stockPrices2(array))


/////////////////////////////////////////////////////////////////////////////////////
/* Algo God Approach
    This is how Zack the Free Man didit.
    Looks like he declared a max var and the currr lowest var
    Loops thru thee array and checks if curr is greaterr than lowest
    If so then subtract the lowest num by curr el store as profit
    Then reassign the max to greater of curr max and cuurr profit
    Else the lowest num is reassigned to curr el
    This is interesting ill have to come back to this
*/

// O(n) time | O(1) space where n is length of prices array
const maxProfit = (prices) => {
    // declare max and current min variables
    let max = 0;
    let minPrice = prices[0];
    // loop through prices
    for (let i = 1; i < prices.length; i++) {
      // check if current price is greater than minPrice
      if (prices[i] > minPrice) {
        // calculate profit and update max
        const profit = prices[i] - minPrice;
        max = Math.max(max, profit);
      } else {
        // update minPrice
        minPrice = prices[i];
      }
    }
    return max;
  };
  
  console.log(maxProfit([7, 1, 5, 3, 6, 4]));
  