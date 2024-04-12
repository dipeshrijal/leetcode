var maxProfit = function (prices) {
  // for (let i = 0; i < prices.length; i++) {
  //   for (j = i + 1; j < prices.length; j++) {
  //     let profit = prices[j] - prices[i];
  //     if (profit > mProfit) {
  //       mProfit = profit;
  //     }
  //   }
  // }

  let buy = prices[0];
  let profit = 0;
  let mProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    }
    profit = prices[i] - buy;

    if (profit > mProfit) {
      mProfit = profit;
    }
  }

  return mProfit;
};

let prices = [7, 6, 4, 3, 1];
// let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
