// JavaScript Variables's Scope

const UserID = "12354"; // the variable value can't be changed, t's is scope dependent 
console.log("User Id is : ",UserID);


let userEmail = "dummy@gmail.com"; // the variable value can be changed , it's is scope dependent 
console.log("User Email is :" , userEmail);


var userName = "Pankaj Kshirsagar";      // variable of var should not be used because
console.log("User Name is :",userName);  // they don't work on concept of the scope

//
/*
    Global scope: The default scope for all code running in script mode.
    Module scope: The scope for code running in module mode.
    Function scope: The scope created with a function.
    
    In addition, variables declared with let or const can belong to an additional scope:
    Block scope: The scope created with a pair of curly braces (a block).
*/
