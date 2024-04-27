/*
    for...in loop is specifically designed for iterating over object properties, 
    including those inherited from the prototype chain, providing a convenient way to enumerate properties in an object.
*/


// 1.1 for...in on the array
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// 1.2 for..in on the string
const greetings = "Hello world!"

for (const greet in greetings) {
    console.log(`Each char is ${greet}`)
}

// 1.1 for...in on the array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}


// 1.1 for...of on the map
const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}