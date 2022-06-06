/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];


let newArr = numberArray.concat(stringArray);

let length = newArr.length;

for (let newArrIdx = 0; newArrIdx < length; newArrIdx ++) {
    result.push(newArr[newArrIdx])

    if (newArr[newArrIdx] == "1") { result.splice(newArrIdx, 1, "one");
    }
    else if (newArr[newArrIdx] == "3") { result.splice(newArrIdx, 1, "three");
    }
    else if (newArr[newArrIdx] == "5") { result.splice(newArrIdx, 1, "five");
    }
    else if (newArr[newArrIdx] == "foo") { result.splice(newArrIdx, 1, "f00" );
    }
    else if (newArr[newArrIdx] == "bar") { result.splice(newArrIdx, 1, "Bar");
    }
    else if (newArr[newArrIdx] == "baz") { result.splice(newArrIdx, 1, "b@z");
    }
    else if (newArr[newArrIdx] == "qux") { result.splice(newArrIdx, 1, "quX")
    }
    else if (newArr[newArrIdx] == "echo") { result.splice(newArrIdx, 1, "3ch0"); 
    }
}

result.unshift("h@ck");
result.push("h@ck")
result.splice(6, 0, "h@ck");


//export result
module.exports = result;