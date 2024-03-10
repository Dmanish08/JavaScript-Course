// cummulative addition of elements of an array using reduce function

const numbers = [1, 2, 3, 4]

// const total = numbers.reduce( function (acc, currVal) {
//     console.log(`accummulator: ${acc} and current value: ${currVal}`);
//     return acc + currVal
// }, 0)

const total = numbers.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(total);


// calculation of total amount in a shopping cart

const shoppingCart = [
    {
        itemName: "shoes",
        price: 2999.0
    },
    {
        itemName: "books",
        price: 999.0
    },
    {
        itemName: "mobile",
        price: 12999.0
    },
    {
        itemName: "laptop",
        price: 32999.0
    }
]

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalAmount);