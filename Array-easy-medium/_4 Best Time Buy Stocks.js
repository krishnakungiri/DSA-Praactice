/**
 * 121. Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
 */
/**BRUT FORCE
// for (let j = i; j < n; j++) {
//   if (prices[j + 1] - prices[i] > maxProfit) {
//     maxProfit = prices[j + 1] - prices[i];
//   }
// }
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let minValue = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < n; i++) {
    // strat with 1,  since we cannot sell same day
    if (prices[i] - minValue > maxProfit) {
      maxProfit = prices[i] - minValue;
    }
    if (prices[i] < minValue) {
      minValue = prices[i];
    }
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];

let result = maxProfit(prices);
console.log(result);
