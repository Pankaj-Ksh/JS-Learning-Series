let value = 33;
let negValue = -value;
console.log("Positive value is : ", value , " Negative value is : ", negValue, "\n");


// Basic Operation on same Datatype : 
console.log("Basic Operation on same Datatype : ");
console.log(2+2);         // 4
console.log(2-2);         // 0
console.log(2*2);         // 4
console.log(2**3);        // 8 (2 to power 3)
console.log(2/3);         // 0.6666666666666666
console.log(2%3);         // 2


// string addition i.e is String concatenation (we use the + operator)
console.log("\nString addition : ");
let name = "Pankaj ";
let surename = "Kshirsagar";
console.log(name + surename);

let fullName = name + surename;
console.log(fullName);

/* note : 
   no concept like console.log(name - surename);
*/


// Operation on Different Datatype : (Some are Important)
console.log("\nOperation on Different Datatype : (Some are Important)");
console.log("1" + 2);                   // => 12

console.log(1 + "2");                   // => 12

console.log("1" + 2 + 2);               // => 122

console.log(1 + 2 + "2");               // => 32

console.log( (3 + 4) * 5 % 3);          // => 2

console.log(+true);                     // => 1

// console.log(true+);                  // => Give Error

console.log(+"");                       // => 0

//console.log(""+);                     // => Give Error

console.log(null);                      // => null

console.log(+null);                     // => 0

//console.log(null+);                   // => Give Error

console.log(undefined);                 // => undefined

console.log(+undefined);                // => NaN

//console.log(undefined+);              // => Give Error