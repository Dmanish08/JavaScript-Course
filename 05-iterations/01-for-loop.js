// for (let i = 0; i <= 5; i++) {
//     console.log(`Outer loop value of i: ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`Inner loop value of j: ${j} & Inner loop value of i: ${i}`);        
//     }    
// }



// printing the elements of an array

const myArr = ["Ironman", "Batman", "Spiderman"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
}



// break and continue

for (let i = 0; i <= 10; i++) {
    if (i==5){
        console.log(`detected number 5`);
        break                                   // terminates the loop if the condition is true
    }
    console.log(`The number is: ${i}`);
    
}
for (let i = 0; i <= 10; i++) {
    if (i==5){
        console.log(`detected number 5`);
        continue                                 // skips the loop only for the number of times the condition is true
    }
    console.log(`The number is: ${i}`);
    
}
