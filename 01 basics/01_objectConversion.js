let number = "10as"
let newnumber = Number(number)
console.log(newnumber);
// NaN -> not a number! but if we search typeof, it will show number because thats what we declared!
// same with null, string, and boolean!
let boolean = 1
let newboolean = Boolean(boolean)
console.log(typeof newboolean);
// and soo on, if you want to change the value to null, string, boolean or numbers
//  use => let "variableName = "New Datatype"("old variable")