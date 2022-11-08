const prompt = require('prompt-sync')({ sigint: true });
let creditCardNumber = prompt("Please enter your credit card number:");

//American Express card numbers start with 34 or 37 and have 15 digits.
if (creditCardNumber.length == 15 && creditCardNumber.substring(0, 2) == "34" || creditCardNumber.substring(0, 2) == "37") {
  console.log("This is a valid American Express card number.");
} //.substring(0, 2) extracts the first two characters (index 0 and 1) from the creditCardNumber string and returns them.

//Visa numbers start with 4 
else if (creditCardNumber.length == 16 && creditCardNumber.substring(0, 1) == "4") {
  console.log("This is a valid Visa card number.");
}

//MasterCard numbers start with 51, 52, 53, 54, or 55 and have 16 digits.
else if (creditCardNumber.length == 16 && creditCardNumber.substring(0, 2) >= "51" && creditCardNumber.substring(0, 2) <= "55") {
  console.log("This is a valid MasterCard card number.");
}
else {
  console.log("This is not a valid credit card number.");
}