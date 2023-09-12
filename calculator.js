/*1.Create  a Function and print 'This is Calculator'*/
function casio() {
    console.log("This is Calculator");
}

casio();
//
//
//

/*2.Create a Function and that should return a string 'This is Calculator and print it'*/
function second() {
    return console.log("This is Calculator");
}

second();
//
//
//

/*3.Create a function that takes three parameters and print and all those */
function third(a, b, c) {
    console.log("Variable a is " + a);
    console.log("Variable b is " + b);
    console.log("Variable c is " + c);
}

third("Ram", "Tharun", 200);
//
//
//

/*4.Create A Function That takes three parameters as a number and return sum of the three numbers*/
function add(a, b, c) {
    const d = a + b + c;
    return d;
}

console.log(add(10, 20, 30));
//
//
//

/*5.Create a function called 'sumWithValidation' takes three 
parameters as number and return sum of the three numbers only if all of those paramters are numberes otherwise return 0*/
function sumWithValidation(num1, num2, num3) {
    if (typeof num1 === "number" && typeof num2 == "number" && typeof num3 === "number") {
        return num1 + num2 + num3;
    } else {
        return 0;
    }
}

const result = sumWithValidation("hhhh", 30, 55);
console.log(result);
//
//
//
//

/*6.Create a function for multiplicaiton of two numberes and return the value */
function multiply(a, b) {
    const c = a * b;
    return console.log(c);
}

multiply(10, 20);
//
//
//

/*7.Create a function using function expression and takes one parameter as an input and return it.*/
const work = function (a) {
    return console.log(a);
};
work("This is a Function Expression");
//
//
//
//
//
