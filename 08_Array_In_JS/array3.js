// #1 Various Operation on the Array

// Array is essentially a built-in object in JavaScript, that provides utility functions and methods for working with arrays.

console.log(Array.isArray("Hitesh"))                        // function used to determine whether a given value is an array.
// Output : false , because it is not a array.

console.log(Array.from("pankaj"))                           //  static method that creates a new, shallow-copied array instance from iterable object. 
// Output : [ 'p', 'a', 'n', 'k', 'a', 'j' ]

console.log(Array.from({name: "pankaj", lastName: "Kshirsgar"})) //           --> interesting <--
// Since the object is not iterable, Array.from() cannot create an array directly from it.
// The output will be an empty array [].


// Extract keys and values separately from Object+
const obj = {name: "pankaj", lastName: "Kshirsgar"};
const keysArray = Object.keys(obj);
const valuesArray = Object.values(obj);

console.log(keysArray);   // Output: ["name", "lastName"]
console.log(valuesArray); // Output: ["pankaj", "Kshirsgar"]


// way to create a Array from variables.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));               // Output: [ "100", "200", "300"]