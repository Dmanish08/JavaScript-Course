// declaring a fetch using async-await
// async function getUsers(){
//     try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const users = await response.json()
//             console.log(users);
//     } catch (error) {
//         console.log('Something went wrong');
//     }

// }

// getUsers()



// fetch using then(), catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))