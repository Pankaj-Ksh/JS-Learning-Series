/*  Hositing Concept : 
    Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope
    during the compile phase, regardless of where they are declared in the code. This means that you can use variables and 
    functions before they are actually declared in your code, as they are effectively "hoisted" to the top of their scope.
*/



// 1. 
console.log(x);                          // Output: undefined
var x = 5;
/*
    Variables declared with var are hoisted to the top of their containing scope, and 
    they are initialized with a value of undefined by default.
*/

console.log(y);                          // Output:  Cannot access 'y' before initialization
let y = 5;

console.log(z);                          // Output:  Cannot access 'z' before initialization
const z = 5;
/*
    Variables declared with let and const are hoisted to the top of their block scope but are not initialized. 
    They are in a "temporal dead zone" until the actual declaration statement is encountered in the code. 
    Accessing the variable before it's declared will result in a ReferenceError
*/




// 2. differences in how functions declared with the function keyword and those declared with const behave regarding hoisting.
console.log(addone(5))                    // output --> 6
function addone(num){
    return num + 1
}
/*
    Function declarations are fully hoisted to the top of their containing scope. 
    This means you can call the function before it's declared in the code, and it will still work.
*/


addTwo(5)                                 // output --> ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
/*
    Function declarations are fully hoisted, allowing you to call them before they appear in the code. 
    However, function expressions (assigned to variables using const, let, or var) are hoisted differently.
    Only the variable name is hoisted, not the function assignment itself.
*/