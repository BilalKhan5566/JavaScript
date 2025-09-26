// Primitives → Stack
let name = "Bilal";
let age = 18;

let anotherAge = age; // copies the VALUE
anotherAge++;
console.log(age);        // 18  (unchanged)
console.log(anotherAge); // 19

// Objects → Heap
let user = { city: "Lahore" };
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

