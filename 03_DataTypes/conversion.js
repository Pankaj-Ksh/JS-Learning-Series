// Two Way of using the typeof
let score = "Pankaj"
console.log(typeof score);
console.log(typeof(score));


// 1. Converting to the number : use the Number()
let valueInNumber = Number(score)
console.log(typeof valueInNumber);         // it is converting to the number 
console.log(valueInNumber);                // but, value become the NaN

/* note : 
   "5832" convert to Number => 5832
   "5832Pankaj" convert to Number but value become => NaN
*/


// 2. Converting to the boolean : use the Boolean()
let isLoggedIn = "pankaj"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let abc = "";
let abcBoolean = Boolean(abc)
console.log(abcBoolean);

/* 1 => true; 0 => false
   "" (Empty String in Boolean is => False ) 
   "pankaj" (Non-Empty String in Boolean is => true ) 
*/


// 3. Converting to the string : use the String()
let num = 33;
let strNum = String(num);
console.log(strNum);
console.log(typeof strNum);


// Always keep in mind Write code in readable formate.