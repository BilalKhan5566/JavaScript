// dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString); 
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateddate = new Date(2023, 0, 23) // month starts from 0 in java
// console.log(myCreateddate.toDateString())
let myCreateddate2 = new Date(2023,0,23, 5, 3)
console.log(myCreateddate2.toLocaleString());  
// using .toLocaleString -> show Date, time etc (if mentioned)
// using .toDateString -> show Date only!
