// singleton
// 1.Object.create --> Create a Singleton

// 2.Object literals

const User = {
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
console.log(User.myFun);           // : This statement logs the function definition itself to the console. It does not execute the function, but rather displays the function as a reference
// output --> [Function: myFun]

console.log(User.myFun());         // : This statement executes the function and logs the return value (if any) to the console. 
// output --> Hello, my name is Pankaj and I am 18 years old.

console.log(User);                                            


// Question :- How can you use symbols to create unique object properties? 
const mySym = Symbol("key1")

const User1 = {
    name: "Pankaj",
    "full name": "Pankaj ksh",
    [mySym]: "mykey1",
    age: 18,
    location: "solapur",
    email: "pankaj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Various Way to Access 
console.log(User1.email)
console.log(User1["email"])
console.log(User1["full name"])
console.log(User1[mySym])

// Various Way to Modify
User1.email = "pankaj@chatgpt.com"
User1["age"] = 20
User1["full name"] = "Pankaj Kshirsagar"
User1[mySym] = "userID-1"
console.log(User1);


// Question :-  How not to change the properties of Object 

// Object.freeze(User1);
// The Object.freeze() method in JavaScript is used to freeze an object, 
// which means that once an object is frozen, its properties cannot be added, modified, or removed.

User1.age = 22;
console.log(" After freeze , the Values are : " ,User1);


// Function in Object in this way we can create and same way to access 
User1.greeting = function(){
    console.log("Hello JS user");
}
User1.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);     // this.  refers to the current Object
}

console.log(User1.greeting());
console.log(User1.greetingTwo());
console.log(User1);
/*  final Values in User1 Object are  
    {
        name: 'Pankaj',
        'full name': 'Pankaj Kshirsagar',
        age: 22,
        location: 'solapur',
        email: 'pankaj@chatgpt.com',
        isLoggedIn: false,
        lastLoginDays: [ 'Monday', 'Saturday' ],
        greeting: [Function (anonymous)],
        greetingTwo: [Function (anonymous)],
        [Symbol(key1)]: 'userID-1'
    }
*/