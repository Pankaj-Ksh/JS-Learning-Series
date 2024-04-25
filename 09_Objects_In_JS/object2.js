// 1. nested Objects

const regularUser = {
    email: "Pankaj@gmail.com",
    fullname: {
        userfullname: {
            firstname: "pankaj",
            lastname: "ksh"
        },
    },
}

console.log(regularUser);
console.log(regularUser.hasOwnProperty('isLoggedIn'));       // output --> false

console.log(regularUser.fullname.userfullname.firstname);    // output --> pankaj
console.log(regularUser.fullname?.userfullname.firstname);    // output --> pankaj
/*
    The ?. (optional chaining) operator:- is a feature introduced in ECMAScript 2020 (ES11).
    It's used to simplify accessing properties of an object when the properties might not exist (i.e., are null or undefined).
    if regularUser.fullname is null or undefined, the expression regularUser.fullname?.userfullname.firstname evaluates to undefined, and no error is thrown.
    It short-circuits the evaluation and returns undefined without trying to access the fullname property of undefined.
*/



// 2. How to combine objects
const a = {1: "a", 2: "b"}
const b = {3: "a", 4: "b"}
const c = {5: "a", 6: "b"}

const combine1 = { a, b, c }                      
console.log(combine1);                            // output --> {a: { '1': 'a', '2': 'b' } , b: { '3': 'a', '4': 'b' }, c: { '5': 'a', '6': 'b' } }

const combine2 = Object.assign({}, a, b, c )      
console.log(combine2);                            // output --> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const combine3 = {...a, ...b, ...c}                
console.log(combine3);                            // output --> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// 3. How to create a Array of Objects
const user = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "v@gmail.com"
    },
    {
        id: 4,
        email: "a@gmail.com"
    }
]

console.log(user[1].email);

// this below function are not used on array of objects , they are used on single Object
console.log(Object.keys(user));               
console.log(Object.values(user));
console.log(Object.entries(user));



// 3. How to get only keys, values, all entries from Objects
const userData = {
    name: "Pankaj",
    "full name": "Pankaj Kshirsagar",
    age: 18,
    location: "solapur",
    email: "pankaj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    myFun : function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
} 
console.log(Object.keys(userData));               
console.log(Object.values(userData));
console.log(Object.entries(userData));



// 4. Destructuring in JavaScript
const course = {
    coursename: "abcd",
    price: "999",
    courseInstructor: "pankaj"
}

const {price} = course;
console.log(price);                        // output --> 999

const {courseInstructor: instructor} = course;
/*
    {courseInstructor: instructor}: This is the object destructuring syntax. 
    It means that from the object course, we want to extract the value associated with 
    the key courseInstructor and assign it to a new variable called instructor. 
*/

// console.log(courseInstructor);              --> this will give error, means now using courseInstructor we can't access.
console.log(instructor);                    // output --> pankaj

/*
    Destructuring in JavaScript:- is dissecting data structures, arrays, and objects, 
    in this case, to easily access the values inside them. Destructuring helps to 
    unpack values from arrays and objects into distinct variables, so you do not have 
    to dig through large arrays or objects to get the values you need.
*/