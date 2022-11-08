const prompt = require('prompt-sync')({ sigint: true });
let msg = prompt("Enter Password: ");
let key = Number.parseInt(prompt("Enter Key: "));

function cypher (msg, key){
    let result = "";
    for (let i = 0; i < msg.length; i++){
        if (msg[i] == msg[i].toUpperCase()){
            let shiftText = String.fromCharCode((msg[i].charCodeAt(0) + key-65) % 26 + 65); 
            result += shiftText;

        /* 
            In the code above, the key is subtracted from 65, which is the ASCII code for A. This means that if the key
            is 0, the letter will not be shifted, if the key is 1, the letter will be shifted one letter to the right, 
            if the key is 2, the letter will be shifted two letters to the right, and so on. After the key is subtracted 
            from 65, the result is modded by 26. This is because there are only 26 letters in the alphabet and we don't 
            want the code to shift a letter more than once. Finally, 65 is added to the result. This is because when the 
            key is subtracted from 65, the result is a number between -64 and 26. Adding 65 to this number gives a number
            between 1 and 91, which are all the possible
        */

        }
        else{
            let shiftText = String.fromCharCode((msg[i].charCodeAt(0) + key-97) % 26 + 97);
            result += shiftText;
        }
    }
    console.log(result);
}
cypher(msg, key)