/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];


result = arr.slice(1, 4);
let length = result.length;

result = result.map (function (reemplazar) {
    
    for (let map = 0; map < length; map ++) {
        let string = arr[map];
        let idx = string.charAt(1)
        
        if (idx == "a") {
            reemplazar = reemplazar.replace("a", "@")
            reemplazar = reemplazar.replace("qux", "QUX")
        }
        else if (string == "qux") {
        }
    }
    return reemplazar;
})

/*
result = result.map(function(reemplazar) {
    for (let a = 0; a < 2; a++) {
        reemplazar = reemplazar.replace("qux", "QUX");
    }
    return reemplazar;
})
*/

//cap.charAt(0).toUpperCase()



/*
let arrCopy = arr.slice(1, 4);
let a = arrCopy[0]
let b = arrCopy[1]

result = arrCopy.map(function(items){
    if (arrCopy.includes(a)){
        return arrCopy.replace("a", "@");
    }
})
*/


// arrCopy[0].replace("bar", "b@r");

//export result
module.exports = result;