/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = 0;

const arrLength = arr.length;

for (let string = 0; string < arrLength; string ++) {
        const firstChar = arr[string].charAt(0);
        if (firstChar == "b") {
                result = result + 1;
        }
}


/*
let idx = arr.length;

for (a = 0; a < idx; a++) {
        if (arr[0].charAt(0) == "b") {
                a+1
        }

}
*/

/*
let idx = arr.length;

let buscarB = arr.map(function(buscar) {
        for (let a = 0; a < idx; a++) { 
                if (arr[0].charAt(0) == "b" ) {
                        a+1;
                }
}})


/*
let scan = arr.map(function(buscar) {
        if (arr.includes("bar")) {
                return ;
        }
})
*/


//export result
module.exports = result;