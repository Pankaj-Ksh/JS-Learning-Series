/*  IIFE :
    An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

    UseCase : 
    1. Immediately Executing Initialization Code.
    2. Avoid polluting the global namespace.
*/

// 1. Incorrect way , not giving the ;  --> it will give error  
(function greet(name){
    // Name IIFE
    console.log(`hello, ${name}`);
})('pankaj')


( (name) => {
    console.log(`hello ${name}`)
})('Dhokare')


// 2. correct way to use IIFE , is always give the ; after end of IIFE
(function myFun(name){
    // Name IIFE
    console.log(`hello, ${name}`);
})('pankaj');


( (name) => {
    console.log(`hello ${name}`)
})('Dhokare');