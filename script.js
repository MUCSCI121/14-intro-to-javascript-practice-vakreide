// True Values: any number 1 or greate, true
// False Values: 0, false

let temperature = 68;

if (temperature==68){
    console.log("perfect temperature");
}

if (false) {
    console.log("oops');")
}

console.log(temperature:"  +  temperature");

console.log("--------------------");
/*
*Practice using functions
*/
function divide(numerator,denominator) {
    console.log("divide started");
    let result = numerator/denominator;
    return result;
}