let score = 400                 // creates a variable score of Type Number
console.log(score);             

let balance = new Number(100)   // creates a new object balance that contains the Number 100
console.log(balance);           

// Methods in Number datatype

let num1 = 1000

console.log(num1.toString());           // converts the Number into a String 
console.log(num1.toString().length);    // all methods of Strings are applicable afterwards
console.log(num1.toFixed(3));           // displays upto 3 decimal places

let num2 = 23.8966
let num3 = 123.8966
console.log(num2.toPrecision(3));       // rounds off the number into 3 characters and converts it into a String
console.log(num3.toPrecision(3));       

let num4 = 100000000
console.log(num4.toLocaleString());            // converts the number into String of en-US standards -> '100,000,000'
console.log(num4.toLocaleString("en-IN"));     // converts the number into String of en-IN standards -> '10,00,00,000'


/********************************************Maths Library*********************************************************/

console.log(Math);  
//Functions of Math Library
console.log(Math.abs(-67));
console.log(Math.round(98.3));
console.log(Math.ceil(98.3));
console.log(Math.floor(98.3));
console.log(Math.max(4, 5, 9,3, 2, 1));

// Generating random numbers in Javascript

console.log(Math.random());     // Generates random numbers between 0 and 1
console.log((Math.random()*10) + 1); 
console.log(Math.floor((Math.random()*10)) + 1);    // converts the decimal number generated into an integer

// another way of generating random under given constraints

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + 10); // generates random number between 10 and 20