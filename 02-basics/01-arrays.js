let newArr = [1, 2, 3, 4, 5, 6]

// another way of declaring an array

let myArr = new Array(1, 2, 3, 4, 5)

// console.log(myArr[3]);

// methods in Array

myArr.push(6)           // adds an element to the array
myArr.push(7)
myArr.pop()             // removes the last element from the array
myArr.unshift(0)        // adds an element to the start of the array
myArr.shift()           // removes the first element of the array

// console.log(myArr);

// console.log(myArr.join("-"));
// console.log(myArr);

// checking elements in an array

// console.log(myArr.includes(2));
// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(9));   // if the given element is not present in the array, returns -1

console.log("A", myArr);
console.log(myArr.slice(1,4));      // displays array elements with index 1 to 3 without altering the array
console.log("B", myArr);
console.log(myArr.splice(1,4));     // splits the array elements from the original array with index 1 to 4 
console.log("C",myArr);
