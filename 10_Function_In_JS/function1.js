// 1. 
function sayMyName(){
    console.log("Pankaj");
}
console.log(sayMyName());


// 2.
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


// 3.
function loginUserMessage(username = "sam"){              // giving the by default value, if value will not pass in argument  
    if(!username){                                        // the function will get the sam value by default
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());                    // sam just logged in
console.log(loginUserMessage("Pankaj"))             // pankaj just logged in
console.log(loginUserMessage("Kshiragar"))          // Kshiragar just logged in



// 4.
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))
// The rest parameter: syntax allows a function to accept an indefinite
// number of arguments as an array, providing a way to represent variadic functions in JavaScript


// 5.
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject?.price}`);
}

handleObject(user)

handleObject({
    username: "sam",
    price: 399
})


// 6.
function returnSecondValue(getArray){
    return getArray[1]
}

const myNewArray = [200, 400, 100, 600]
console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 300, 500, 1000]));