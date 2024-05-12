const promiseOne = new Promise(function(resolve, reject){
    // Do any async task
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()   // passed on to then method
    }, 1000);
})


promiseOne.then(function(){
    console.log('Promise is consumed');
})


// alternative way of declaring promises
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task 2 is completed');
        resolve()
    }, 2000);
}).then(function(){
    console.log('Promise is consumed');
})



// accessing values from resolve method
const promiseTwo = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve({username: 'Manish99', email: 'debmanish6@gmail.com'})
    }, 3000);
})

promiseTwo.then((user) => {
    console.log(user);
})


// handling error values of a promise
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error){
            resolve({username: 'Chandrachood', email: 'user@abcmail.com'})
        } else{
            reject('Something went wrong!')
        }
    }, 4000);
})

promiseThree.then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err);
})


// promise with return statement
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
        resolve({username: 'johndoe99', email:'johndoe@example.com'})
        } else{
            reject('Something went wrong!')
        }
    }, 5000);
})

// const returnVal = promiseFour.then((user) => {
//     return user
// })
// console.log(returnVal) // doesn't return the required value, instead returns the state of the promise

promiseFour.then((user) => {
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
})


// using finally after a promise is executed
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
        resolve({username: 'aegonTargeryan', email:'aegon@example.com'})
        } else{
            reject('Something went wrong!')
        }
    }, 6000);
})

promiseFive.then((user) => {
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err);
}).finally(() => console.log('The promise or resolved or rejected successfully'))



// consumption of promise using async-await
const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: 'Javascript', code: 'JS00234'})
        } else{
            reject('Something went wrong!')
        }
    }, 7000);
})

// Without handling the error
// async function consumePromise(){
//     const response = await promiseSix
//     console.log(response);
// }

// consumePromise()


// Handling the error with try-catch block
async function consumePromise(){
    try {
        const response = await promiseSix
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}


consumePromise()