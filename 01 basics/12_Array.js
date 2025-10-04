// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ["SuperMan", "IronMan"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array Method

myArr.push(6) // add "6" into the array
myArr.pop() // Remove the last value of array
myArr.unshift(9) // add 9 in the start of array
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newwArr = myArr.join()
console.log(myArr);
console.log(newwArr);

// what is slice and splice? (also as inetrwiew perspective)
console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

const Heroes1 = ["WonderWomen", "SpiderMan", "Robin"]
const Heroes2 = ["Flash", "BatMan", "Eren"]
// Heroes1.push(Heroes2) // this merges the second array, but not as part of array but as array in array
// console.log(Heroes1);

const all_Heroes = Heroes1.concat(Heroes2) // this method merges array as an part of an array
// console.log(all_Heroes);

const new_all_Heroes = [...Heroes1, ...Heroes2] // "..." is called spread method, and it literaly spread the value in new array
console.log(new_all_Heroes);

const newArr = [1, 2, 3, [4, 5], 6, [7, [5, 4]], 8]
const newArrMethod = newArr.flat(Infinity) // sort out all depth by itself
console.log(newArrMethod);

console.log(Array.isArray("Bilal")); // ask a question wether the given value is array or not (its fucking not)
console.log(Array.from("Bilal")); // convert this string to array

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));












