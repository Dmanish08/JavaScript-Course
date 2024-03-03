const tinderUser = {}

tinderUser.id = "1234"
tinderUser.username = "Chandrachood"
tinderUser.isLoggedIn = false           

// console.log(tinderUser);


const user = {
    userId: 1134,
    fullName: {                                 // nested object
        firstName: "Chandrachood",
        lastName: "Chauhan"                 
    },
    emailId: "user@gmail.com"
}

// console.log(user.fullName.firstName);        // accessing nested object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign(obj1, obj2)       
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1110,
        userName: "user1"
    },
    {
        id: 1111,
        userName: "user2"
    },
    {
        id: 1112,
        userName: "user3"
    },
    {
        id: 1113,
        userName: "user4"
    }
]

console.log(users[2].id,users[2].userName);

console.log(tinderUser);

console.log(Object.keys(tinderUser));           // returns an array of keys
