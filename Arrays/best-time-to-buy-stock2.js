/*
You are given an integer array prices where prices[i] is the
price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock.
You can only hold at most one share of the stock at any time.
However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Ex:
[7,1,5,3,6,4] 7
[1,7,8,3,6,4] 10
[7,6,5,3,6,4] 3

*/

const array = [1,7,8,3,6,4];
// 1st attempt: time O(n) | space O(1)
const mostProfit = (arr) => {
    let profit = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) profit += arr[i + 1] - arr[i]
    }
    return profit;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Algo God Approach
    This is how Zack the Free Man didit.

*/


// Approach: Peak/Valley
// O(n) time | O(1) space
const maxProfit = (prices) => {
  // declare profit variable
  let profit = 0;
  // loop through prices and compare to prior day's price
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      // if current price is greater than day before, add to profit
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
};
