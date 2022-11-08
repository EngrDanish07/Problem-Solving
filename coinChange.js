const prompt = require("prompt-sync")({ sigint: true });
let coins = [1, 5, 10, 25];
let amount = prompt("Enter change? ");
let result = [];
 
for (let i = coins.length - 1; i >= 0; i--) {
  while (amount - coins[i] >= 0) {
    amount -= coins[i];
    result.push(coins[i]);
  }
}
 
console.log(result);