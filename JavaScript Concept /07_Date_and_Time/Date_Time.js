// # Dates and Time : => typeof Date is Object 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDat2 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate3 = new Date("2023-01-14")


let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString());               // Output as : 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());                      // returns the number of milliseconds elapsed since the Unix Epoch for the specified date.
console.log(Math.floor(Date.now()/1000));                   // By dividing value by 1000, we convert milliseconds to seconds.                 


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());




// Ways to Create a Date Object:
let currentDate = new Date();                                // creates a Date object representing the current date and time
let specificDate = new Date("2024-04-23");                   // creates a Date object for a specific date
let specificDateTime = new Date(2024, 3, 23, 10, 30, 0);     // year, month (0-indexed), day, hour, minute, second


// Ways to Get, Date and Time Components:
let year = currentDate.getFullYear();                        // get the year (four digits)
let month = currentDate.getMonth();                          // get the month (0-indexed, January is 0)
let day = currentDate.getDate();                             // get the day of the month (1-31)
let hour = currentDate.getHours();                           // get the hour (0-23)
let minute = currentDate.getMinutes();                       // get the minutes (0-59)
let second = currentDate.getSeconds();                       // get the seconds (0-59)
let milliseconds = currentDate.getMilliseconds();            // get the milliseconds (0-999)



//  Suppose you're building a scheduling application where users can set reminders 
//  for specific dates and times. You can use the set methods to allow users to customize 
//  the date and time for their reminders.

let reminderDate = new Date();                               // Initialize with current date and time
reminderDate.setFullYear(2025);                              // Set the year
reminderDate.setMonth(5);                                    // Set the month (June)
reminderDate.setDate(15);                                    // Set the day of the month
reminderDate.setHours(14);                                   // Set the hour (2 PM)
reminderDate.setMinutes(45);                                 // Set the minutes
reminderDate.setSeconds(30);                                 // Set the seconds
// console.log("Reminder Date and Time:", reminderDate.toLocaleString());