// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint


const myfunction = function() {
    console.log("Hello Bilal");
    
}
const Array = ["Bilal", "khan", "Cat"]

const id = Symbol('12345')
const anotherid = Symbol('12345')
console.log(id === anotherid) //even with the same id, symbols will be different!

// 2) Non-primitive (reference) Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object