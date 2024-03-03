function addTwoNumbers(num1, num2){
    return num1 + num2
}

console.log(addTwoNumbers(3,4));

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
console.log(loginUser(""));


