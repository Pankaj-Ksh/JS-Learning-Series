// Function chaining :-

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);                      // output --> [ 41, 51, 61, 71, 81, 91, 101 ]

/*
    Function chaining in JavaScript is a technique where multiple functions are called in sequence on the same object or value. 
    Each function call returns an object or value that can be used to call the next function in the chain, 
    resulting in a concise and fluent coding style. 
*/