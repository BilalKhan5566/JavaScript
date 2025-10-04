// dates
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString); 
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateddate = new Date(2023, 0, 23) // month starts from 0 in javascript beecause its array
// console.log(myCreateddate.toDateString())
let myCreateddate2 = new Date(2023,0,23, 5, 3)
console.log(myCreateddate2.toLocaleString());  
// using .toLocaleString -> show Date, time etc (if mentioned)
// using .toDateString -> show Date only!
let createDate = new Date(2025-1-14) //yy-mm-dd, the month here starts from 1 because of this!
console.log(createDate.toLocaleString());
// to get the exact value in time cases(quizes etc)
let mytime = Date.now()
console.log(mytime);
console.log(createDate.getTime());
console.log(Date.now);
console.log(Math.floor(Date.now()/1000));
mytime.toLocaleString(`default`, {
    weekday: "long"
})



