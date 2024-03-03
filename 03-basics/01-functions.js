function addTwoNumbers(num1, num2){
    return num1 + num2
}

// console.log(addTwoNumbers(3,4));

function loginUser(username){
    // if (!username){
    //     console.log("Please enter your username");
    //     return
    // }
    if (username===undefined){
        console.log("Please enter your username");
        return
    }
    return `Hello, ${username} welcome to your dashboard`
}

// console.log(loginUser("Chandrachood"));
// console.log(loginUser(""));




/************Objects & Arrays in function***************/

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200, 400, 60000));

const user = {
    username: "Chandrachood",
    age: 45
}

function getDetails(obj){                                               // accessing an object using function
    return `Username is ${obj.username} and Age is ${obj.age}`
}

console.log(getDetails(user));

const itemList = ["Shoes", "Bag", "Headphones"]

function getArray(arr){                                                 // accessing an array using function
    return arr[2]
}

console.log(getArray(itemList));