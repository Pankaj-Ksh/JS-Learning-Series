// #1 Syntax for string : 2 syntax are there 

let name1 = "Pankaj";    // typeof(name) --> String

const name2 = new String("Kshirsagar");   // typeof(name) --> Object


// #2 best way to use the string variables :
// The `${}` syntax is used for string interpolation in JavaScript, allowing you to embed expressions within template literals.
console.log(`My First Name is ${name1} and my Surename is ${name2}`);
 


// #3 Important Methods on string 

let str1 = "Hello";
console.log(str1.charAt(0));                                // Output: "H"
// ( Returns the character at the specified index )


let str2 = "Hello";
let str3 = "World";
console.log(str2.concat(" ", str3));                        // Output: "Hello World"
// ( Concatenates two or more strings. we can use + operator )


let str4 = "Hello World";
console.log(str4.indexOf("World"));                         // Output: 6
// ( Returns the index of the first occurrence of the specified value in a string, or -1 if it is not found )


let str5 = "Hello World";
console.log(str5.slice(0, 5));                              // Output: "Hello"
// ( Extracts a section of a string and returns it as a new string )


let str6 = "Hello,World,How,Are,You";
console.log(str6.split(","));                               // Output: ["Hello", "World", "How", "Are", "You"]
// ( Splits a string into an array of substrings based on a specified separator )


let str7 = "Hello World";
console.log(str7.toLowerCase());                            // Output: "hello world"


let str8 = "Hello World";
console.log(str8.toUpperCase());                            // Output: "HELLO WORLD"


let str9 = "Hello World";
console.log(str9.replace("World", "Universe"));             // Output: "Hello Universe"
// ( Replaces a specified value with another value in a string )


let str10 = "   Hello World   ";
console.log(str10.trim());                                  // Output: "Hello World"
// ( Removes whitespace from both ends of a string )


let str11 = "Hello World";
console.log(str11.startsWith("Hello"));                     // Output: true
// ( Checks whether a string starts with the characters of a specified string )


let str12 = "Hello World";
console.log(str12.endsWith("World"));                       // Output: true
// ( Checks whether a string ends with the characters of a specified string )


let str13 = "Hello World";
console.log(str13.includes("World"));                       // Output: true
// (  Checks whether a string contains the specified string )


let str14 = "Hello World";
console.log(str14.charAt(6));                               // Output: "W"
// ( Returns the character at the specified index )


let str15 = "Hello World";
console.log(str15.length);                                  // Output: 11
// ( Property that returns the length of a string )