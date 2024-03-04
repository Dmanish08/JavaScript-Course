// declaring an arrow function

// const addNumbers = (num1, num2) => {
//     return num1 + num2                  // explicit return type
// }


// const addNumbers = (num1, num2) => num1 + num2                  // implicit return type

const addNumbers = (num1, num2) => (num1 + num2)                  // implicit return type

// console.log(addNumbers(3, 4));

const objFunction = () => ({username: "Chandrachood"})

console.log(objFunction());