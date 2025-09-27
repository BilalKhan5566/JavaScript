const name = "Bilal"
const age = "18"
// console.log(name + age + " Khan");   //old method

console.log(`Hello my name is ${name} and my age is ${age}`);


const myname = new String("Bilal-khan-Op")
console.log(myname[0]);
console.log(myname.length);
console.log(myname.toUpperCase);
console.log(myname.charAt(2));
console.log(myname.indexOf("i"));

const newString = myname.substring(0, 4)
console.log(newString);

const anotherString = myname.slice(-3, 4) // can take -ve valuue and reverse the result.
console.log(anotherString);

// What if the user unknownlingly give a lot of space?
const SpaceString = "     Bilal     "
console.log(SpaceString);
console.log(SpaceString.trim); // cancel the unusual space!

const url = "https://Bilal.com/My%20Profile"
console.log(url.replace("%20", "-"));

// split the value, result will be in array
console.log(myname.split("-")); // .split(seperator, limit)

