/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];

let idx = 0;
let length = str.length;

while(idx < length){
    result.push(str.charAt(idx));
    idx ++;
}

/*
while(str.length >= 0){
    result.push(str.length);
    str ++;
}
*/


//export result
module.exports = result;