// This is about the JavaScript Variables's 

const UserID = "12354"; // the variable value can't be changed
console.log("User Id is : ",UserID);



let userEmail = "dummy@gmail.com"; // the variable value can be changed , it's is scope dependent 
console.log("User Email is :" , userEmail);



var userName = "Pankaj Kshirsagar";     // variable of var should not be used because
console.log("User Name is :",userName);  // they don't work on concept of the scope



userAddress = "Mohol";           //variable without datatype can be formed but , it is bad practise 
console.log("User Address is :", userAddress);



let userpassword;               // Initialisiing varables if no value --> That value become undefined
console.log("User Password is :", userpassword);



// Modify the variables value 
//UserID = "0000"; // this is not allowed
userEmail = "pankajksh0@gmail.com";
userName = "Pankaj"
userAddress = "Pune";

console.log("\nPrinting in table form");
console.table([UserID,userEmail, userName, userAddress, userpassword]);