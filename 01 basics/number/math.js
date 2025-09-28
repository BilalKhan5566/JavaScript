// Numbers!
const number1 = 300
// console.log(number1)

const number2 = new Number(100)
// console.log(number2);

// console.log(number2.toString().length);
// console.log(number2.toFixed(2));

const number3 = 123.9432
// console.log(number3.toPrecision(4));
// console.log(number3.toPrecision(3));

const bignumber = 10000000
// console.log(bignumber.toLocaleString('en-IN'));

//  MATHs
console.log(Math)
console.log(Math.abs(-4)); // Chnage value negative to positive
console.log(Math.round(5.6)); // As the name suggest, it round-off the value
console.log(Math.ceil(5.6)); // no matter what the value after decimal, it will round-off it 3.2 > 4
console.log(Math.floor(4.9)); // choose only the value before decimal.
// most comon are .abs & .round functions!
console.log(Math.min(4, 6, 8));
console.log(Math.max(4, 6, 8));
console.log(Math.random()); // a random value between 0 and 1
console.log((Math.random()*10) + 1); // a random value but greator then 1
console.log(Math.floor(Math.random()*10) + 1); // a random value single value

// // What if you want a value between 10 and 20?
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // (max - min + 1) + min its a formula to get a random value between range!











