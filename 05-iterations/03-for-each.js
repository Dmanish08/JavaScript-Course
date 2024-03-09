const myArr = [1, 4, 9, 16, 25, 36]
// myArr.forEach( (item) => {
//     console.log(item);              // gives all the elements inside the array
// })


// invoking a function inside for each to use the elements of an array elsewhere

function printMe(item) {
    console.log(item);
}

// myArr.forEach(printMe)


// accessing multiple properties of an array
myArr.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})



// accessing objects inside an array

const product = [
    {
        productName: "Mobile",
        price: 18999.0
    },
    {
        productName: "Laptop",
        price: 48999.0
    },
    {
        productName: "TV",
        price: 28999.0
    }
]

product.forEach( (item) => {
    console.log(item.productName, item.price);
})