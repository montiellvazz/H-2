/**
 * mediante el loop for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a,"n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a,"n"]
 */
let str = "fooziman";
let result = [];

let length = str.length;

for(idx = 0; idx < length;idx++){
    result.push(str.charAt(idx));
}


/*
for(let iteracion of str){
    result.push(iteracion);
}
*/



//export result
module.exports = result;