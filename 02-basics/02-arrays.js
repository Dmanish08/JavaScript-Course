const marvelHeroes = ["Ironman", "Captain America", "Thor"]
const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes)         // adds the array dcHeroes to the array marvelHeroes as an array inside an array
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);    // displaying the value inside a 2D array

// const allHeroes = marvelHeroes.concat(dcHeroes) // stores both the array into a new array after concating them
// console.log(allHeroes);

const allHeroes = new Array(...marvelHeroes, ...dcHeroes)   // popularly used method for concating arrays
console.log(allHeroes);

const newArr = [1, 2, 3, [4,5], 6, 7, [8, [9, 10]], 11]
const simplifiedArray = newArr.flat(3)                  // converts the mullti-dimensional array into single dimension
console.log(simplifiedArray);

console.log(Array.isArray("Chandrachood"));         // checks whether the given input is an array or not
console.log(Array.from("Chandrachood"));            // converts the given into an array
console.log(Array.from({name: "Chandrachood"}));    // returns an empty array

const name = "Chandrachood"
const score = 100
const rank = 1200
console.log(Array.of(name, score, rank));           // converts a set elements into an array