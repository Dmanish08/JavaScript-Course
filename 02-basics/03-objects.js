// two ways of declaring objects
// constructor method (Singleton)
// Object.create

// object literal

const mySymbol = Symbol("key1")

const user = {
    name: "Chandrachood",
    "full name": "Chandrachood Chauhan",
    [mySymbol]: "my key",
    age: 26,
    email: "user@gmail.com",
    isLoggedIn: true,
    userLoginDays: ["Tuesday", "Thursday"]
}

// console.log(user);
// console.log(user.name);
// console.log(user["full name"]);             // cannot be displayed using dot notation
// console.log(typeof user.mySymbol);          // gives a string type

// altering the values of keys inside the object
user.email = "user@rediffmail.com"

// set the keys as unchangeable
//Object.freeze(user)

// try to change the value
user.email = "user@hotmail.com"         // the value will be unchanged
// console.log(user);


// function inside an object 
user.greeting = function(){
    console.log(`Hello user, ${this.name}`);
}

// accessing the function
console.log(user.greeting());