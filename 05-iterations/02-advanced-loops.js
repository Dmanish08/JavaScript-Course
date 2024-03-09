// for of loop -> used to access the elements of an array

const myArr = [1, 2, 3, 4, 5, 6]

for (const element of myArr) {
    // console.log(element);
}



// for of loop used for accessing characters inside a string

const name = "Chandrachood Chauhan"

for (const char of name) {
    if(char == " "){
        continue
    }
    // console.log(char);
}


// for in loop used for accessing keys and values of an object

const myObj = {
    name: "1qwertyu",
    email: "qwerty",
}

// for (const key in myObj) {
//     console.log(key);               // gives the keys of the object only
// }

for (const key in myObj) {
    // console.log(key, myObj[key]);               // gives both the keys and values
}



// for in used to access elements of an array

for (const key in myArr) {
   console.log(key);                        // gives the keys only    
}

for (const key in myArr) {
   console.log(key, myArr[key]);            // gives both the keys and values            
}