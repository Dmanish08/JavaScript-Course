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