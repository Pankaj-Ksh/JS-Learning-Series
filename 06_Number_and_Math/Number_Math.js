// ---------------------------------- Number ----------------------------------

// #2 two ways to create Number

const num1 = 1000;                               // typeof is --> Number
const num2 = new Number(200);                    // typeof is --> Object


// Various Important functions on Number : 
console.log(num2.toString().length);             // output --> 3


console.log(num2.toFixed(2));                    // output --> 200.00
// This is a method in JavaScript used to format a number to a specified number of decimal places(zeros). 
// In this case, .toFixed(2) is formatting num2 to two decimal places.
// For example, if num2 is 5.6789, .toFixed(2) will round it to 5.68.


let num3 = 1000000;    
console.log(num3.toLocaleString('en-In'));       // output --> 10,00,000
// This means the number will be formatted according to the Indian English locale's conventions,
// including things like digit grouping and decimal separators.


let num  = 123.332
console.log(num.toPrecision(4));                 // outout --> 123.3
// 4 is passed as the argument, which means the number will be formatted to have at most four significant digits.


// ---------------------------------- Maths ----------------------------------
// Some of the important Functions

console.log(Math);                               // displaying the contents of the Math object in the console.
console.log(Math.abs(-4));                       // output --> 4
console.log(Math.round(4.6));                    // output --> 5
console.log(Math.ceil(4.2));                     // output --> 5  ( gives upper value )
console.log(Math.floor(4.9));                    // output --> 4  ( gives lower value )
console.log(Math.min(4, 3, 6, 8));               // output --> 3
console.log(Math.max(4, 3, 6, 8));               // output --> 8
 
console.log(Math.random());                      // Any Random numberbetwwen the [0,1]
console.log((Math.random()*10) + 1);             // Any Random number generates between 1 and 10 , Number also contain the decimal values
console.log(Math.floor(Math.random()*10) + 1);   // Any Random number generates between 1 and 10 , Number also not contain any decimal values


// The Mostly used formula for finding number between the given range
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)