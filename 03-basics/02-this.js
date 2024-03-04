const user = {
    username: "Chandrachood",
    emailId: "user@rediffmail.com",
    welcomeMessage: function(){
        console.log(`Hello, ${this.username}, welcome to the website`);
        // console.log(this);
    }
}

user.welcomeMessage()
console.log(this);          // returns an empty object in node but returns a window in browser console

// function userDetails(){
//     let username = "Chandrachood"
//     console.log(this.username);          // cannot access the current function
// }

// function userDetails(){
//         let username = "Chandrachood"
//         console.log(this);              // returns a global object 
// }

const userDetails = () => {
    let username = "Chandrachood"
    console.log(this)                      // returns an empty object
}
userDetails()