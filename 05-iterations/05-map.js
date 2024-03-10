const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// modify elements of an array
// const newNums = numbers.map( (item) => item + 10)


// chaining of callback functions

const newNums = numbers
                .map( (item) => item * 10)
                .map( (item) => item + 1)
                .filter( (item) => item > 50)

console.log(newNums);

// map is used to perform operations and modify the elements of an array
// filter is used to access specific elements of an array satisfying specific conditions