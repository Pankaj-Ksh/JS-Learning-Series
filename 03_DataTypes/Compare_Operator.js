// Basic Compare between the same Datatype
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


// tricky comparison
console.log("2" > 1);            // true (string is treated as a number)
console.log("02" > 1);           // true (string is treated as a number)
console.log("2a" > 1);           // false

/*  console.log("2a" > 1); 
    When comparing a string to a number, the JavaScript engine attempts to convert the string to a number. 
    In this case, "2a" cannot be directly converted to a number, so it's treated as NaN (Not-a-Number).
    In JavaScript, when comparing NaN with a number using the greater than (>) operator, 
    NaN is considered neither greater than nor less than any number. However, 
    when comparing NaN with any other non-NaN value, including numbers, the result is always false.
*/


console.log(null > 0);           // false
console.log(null == 0);          // false
console.log(null >= 0);          // true
/*
   In JavaScript, when comparing null with a number, null is treated as 0. 
   This behavior is due to type coercion, where null is coerced into a number context, and in that context,
   it becomes 0. So whenever you compare null with a number, null behaves as 0.
*/


console.log(undefined == 0);     // false
console.log(undefined > 0);      // false
console.log(undefined < 0);      // false

/*
  In JavaScript, when undefined is compared with numbers, it's treated as NaN (Not-a-Number)
*/


// === operator (its check value and also the datatype) --> same value and datatypes the true otherwise false 
console.log("2" === 2);           // false
console.log(2 === 2);             // true