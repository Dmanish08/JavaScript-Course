const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newArr = myArr.forEach( (item) => {
//     return item                             // cannot return item from this function
// } )

// console.log(newArr);


// To return item filter method is used

// const newArr = myArr.filter( (item) => {
//     return item
// })

// console.log(newArr);

// apply conditions in an array 

myArr.forEach( (item) => {
    if (item > 4){
        // console.log(item);
    }
} )

// alternative way

const newArr = myArr.filter( (item) => {
    return item > 4
})
// console.log(newArr);




const books = [
    {
        bookName: "Book1", genre: "fiction", publish: 1981, edition: 2009
    },
    {
        bookName: "Book2", genre: "sci-fi", publish: 1998, edition: 2010
    },
    {
        bookName: "Book3", genre: "fiction", publish: 1987, edition: 2007
    },
    {
        bookName: "Book4", genre: "history", publish: 2000, edition: 2009
    },
    {
        bookName: "Book5", genre: "astro-physics", publish: 2004, edition: 2017
    },
    {
        bookName: "Book6", genre: "fiction", publish: 1983, edition: 1998
    },
    {
        bookName: "Book7", genre: "science", publish: 1989, edition: 2008
    },
    {
        bookName: "Book8", genre: "mathematics", publish: 1996, edition: 2009
    },
    {
        bookName: "Book9", genre: "geology", publish: 1971, edition: 2009
    },
    {
        bookName: "Book10", genre: "fantasy", publish: 1998, edition: 2010
    },
    {
        bookName: "Book11", genre: "thriller", publish: 1981, edition: 1998
    }
]

let userChoice = books.filter( (bk) => {
    return bk.genre == "fiction"
})

userChoice = books.filter( (bk) => {
    return bk.genre == "fiction" && bk.edition < 2000
})
console.log(userChoice);