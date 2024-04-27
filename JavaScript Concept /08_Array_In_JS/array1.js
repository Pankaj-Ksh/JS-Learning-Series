// # 3 Ways to create a Array in JS we can use any variables const or let
// typeof array is Object 
const arr1 = [1,2,3,4,5];

let arr2 = new Array("one", "two", "three");

console.log("arr1 is : ", arr1);
console.log("arr2 is : ", arr2);


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// Various Method on array 
let emptyArr = [];
emptyArr.push(6)                           // adding new element in array from backside.
emptyArr.pop()                             // deleteing element in array from backside.

emptyArr.unshift(9)                        // adding new element in array from frontside
emptyArr.shift()                           // deleteing element in array from frontside.
console.log(emptyArr);

console.log(emptyArr.includes(9));         // if element there then return true else, false
console.log(emptyArr.indexOf(3));          // if the element is found return the index else, return -1 value 


let arr3 = [1,2,3,4,5,6,7,8];              // The join() function in JavaScript is used to join all elements 
const newArr = arr3.join()                 // of an array into a string. By default, it joins the elements with a comma ','

console.log(arr3);                         // output : [1, 2, 3, 4, 5, 6, 7, 8]
console.log(newArr);                       // output : 1,2,3,4,5,6,7,8


const myn1 = arr3.slice(1, 3)
console.log("myn1 array is : ",myn1);
console.log("Arr3 after the slice function is applyed", arr3);

const myn2 = arr3.splice(1, 3)
console.log("myn2 array is : ",myn2);
console.log("Arr3 after the splice function is applyed", arr3);

// #2 main difference between the slice and splice is : 
//   (1) Return Value:
//          slice() returns a new array containing the extracted elements, leaving the original array unchanged.
//          splice() modifies the original array and returns an array containing the deleted elements, if any.
//   (2) Modification of the Original Array:
//          slice() does not modify the original array; it creates a shallow copy of the selected portion of the array.
//          splice() directly modifies the original array by adding, removing, or replacing elements.
