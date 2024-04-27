// 1. falsy values --> false, 0, -0, BigInt 0n, "", null, undefined, NaN

// 2. truthy values --> "0", 'false', " ", [], {}, function(){}

const userEmail = []

if (userEmail) {
    console.log("Got user email");             // output will be this line
} else {
    console.log("Don't have user email");
}



// 3. how to check the array is empty 
if (userEmail.length === 0) {
    console.log("Array is empty");
}



// 4. how to check the Object is empty or not 
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}




// 5. Nullish Coalescing Operator (??): null undefined

let val1 = 5 ?? 10                          // Output --> 5
let val2 = null ?? 10                       // Output --> 10
let val3 = undefined ?? 15                  // Output --> 15
let val4 = null ?? 10 ?? 20                 // Output --> 10
/*
    The Nullish Coalescing Operator (??) introduced in ECMAScript 2020 (JavaScript) allows for 
    handling default values specifically for null or undefined cases, excluding other falsy values like 0, '', false, or NaN. 
    It's particularly beneficial when you need a fallback value only for null or undefined scenarios.
*/



// 6. Terniary Operator --> condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")