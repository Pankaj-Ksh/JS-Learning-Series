// for of loop: 
/*
    1.1 
        The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, 
        and array-like objects (e.g., NodeList). It provides a simpler and
        more concise syntax compared to traditional loops like for or while

    1.2
        The for...of loop in JavaScript does not return a value itself. 
        Instead, it iterates over each element of an iterable and executes a block of code for each iteration.
*/


// 1.1 for...of on the array
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}


// 1.2 for..of on the string
const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// 1.3 for...of on the object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}


// 1.4 for...of on the Maps
const map = new Map();

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}