let myDate = new Date()
console.log(typeof myDate);
console.log(myDate);                        // Ouput -> 2024-02-19T06:25:15.758Z

console.log(myDate.toString());             // Output -> Mon Feb 19 2024 11:55:15 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());         // Output -> Mon Feb 19 2024
console.log(myDate.toLocaleDateString());   // Output -> 2/19/2024

// let myCreatedDate = new Date (2024, 0, 24)
// let myCreatedDate = new Date (2024, 0, 24, 5, 30)
let myCreatedDate = new Date ("01-02-2024")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getDate());
console.log(myCreatedDate.getDay());
console.log(myCreatedDate.getMonth() + 1);  // displays the month

// creating timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// converting time from miliseconds to seconds

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
let weekDay = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(weekDay);

