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