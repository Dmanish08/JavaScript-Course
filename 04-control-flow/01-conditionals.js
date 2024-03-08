// truthy and falsy values

let name = "Chandrachood"           // truthy value
// let name = ""                    // falsy value
if (name){
    console.log("Fine");
}else{
    console.log("not fine");
}



// check for an empty array

// const myArr = []
const myArr = [0, 52, 69]
if (myArr.length == 0){
    console.log("Empty array");
}else{
    console.log("Not empty");
}


// check for an empty object

// const myObj = {}
const myObj = {
    name: "qwertyu",
    email: "user@gmail.com"
}
if (Object.keys(myObj).length == 0){
    console.log("Empty Object");
}else{
    console.log("Not empty");
}




// Nullish coalesing operator (??)

// let value = 5 ?? 10
// let value = null ?? 10
let value = null ?? undefined ?? 10

console.log(value);

// Terniary operator

// coondition ? true : false

let price = 100
price <= 80 ? console.log("Less than 80") : console.log("More than 80");