// Primitives → Stack
let name = "Bilal";
let age = 18;

let anotherAge = age; // copies the VALUE
anotherAge++;
console.log(age);        // 18  (unchanged)
console.log(anotherAge); // 19

// Objects → Heap
let user = { city: "Lahore" , age: 18};
let friend = user;      // copies the REFERENCE (address of the object)
friend.city = "Karachi";
console.log(user.city);   // "Karachi"  (both see the same object)


// point need to know:
//datatypes are based on memory allocation

// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) -> Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// if you still want to make a copy of object you can do by add "...", for example:

// const user = { name: "Bilal", address: { city: "Lahore" } };
// const clone = { ...user };
// clone.address.city = "Karachi";
// console.log(user.address.city);





// let ag1e = 25;
// let anothrage1 = 25+1 = 26; // valuee store , --> stack memory


// let data = {name: 'fahad', age :12};
// let data1 = data; // refrenece store  ,,_ heap memory 


// let student_data = {name : undefined , age : undefined , address, gender, };
// student_data.name = 'fahad';


// let std1 = {name : undefined , age : undefined , address, gender, };
// std1.name = 'fahad ' ;



