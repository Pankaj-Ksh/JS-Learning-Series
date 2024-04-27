// normal function
const add = function(num1, num2){
    console.log(this);                      // output --> <ref *1> Object [global]
    return num1+num2;
}
console.log(add(20,30));                    // output --> 50


// Arrow function
const add2 = (n1, n2) => {
    console.log(this);                      // output --> {}
    return n1+n2;
}
console.log(add2(2,3));                     // output --> 5


const add3 = (n1, n2) => n1+n2               // for single expression,
console.log(add3(10,30));                    // output --> 40


const add4 = (n1, n2) => (n1 + n2)           // this is good practise,
console.log(add3(5,4));                      // output --> 9


// 1. when to use the {} and () for function body
/*
    when return statement is used ,then use the {}.
    when () is used , no need to write the return statement.
*/


// 2. this keyword behaviour
console.log(this);                          // output --> {}       
/*
    In Node : 
    when used in the global scope.  this refers to the global object.

    In Browser Environment : 
    when used in the global scope. this refers to the global object, which is window.
*/