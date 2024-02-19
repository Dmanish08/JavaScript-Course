// Stack (Primitive datatypes)

let userName1 = "User 1"
let userName2 = userName1

userName2 = "User 2"

// console.log(userName1);
// console.log(userName2);

/*

userName2 is assigned a copy of userName1
When the value of userName2 is defined later its value changed but the value of userName1 remained unchanged

*/

// Heap memory

let userOne = {
    email: "user@google.com",
    pass: "user@12345"
}

let userTwo = userOne

userTwo.email = "user@rediffmail.com"
userTwo.pass = "user@123"

console.log(userOne);
console.log(userTwo);

/* 

userTwo is assigned a reference of the object userOne
When the value of userTwo is defined later the value of both the objects were modified to the new attributes

*/