// // generating a random color

// function randomColor(){
//     most basic way (Lehman)
//     let randomNum = Math.floor(Math.random()*1000000 + 1)

//     let color = `#${randomNum}`
//     return color

// }

// // function for starting the interval of changing colors
// function startProcess(){
//     function changeColor(){
//         document.querySelector('body').style.backgroundColor = randomColor()
//     }

//     const interval = setInterval(changeColor, 1000)

//     endProcess(interval)
// }


// // assigning the function to button click event
// document.querySelector('#start').addEventListener('click', startProcess)


// // ending the process with stop button click event
// function endProcess(interval){
//     document.querySelector('#stop').addEventListener('click', () => {
//         clearInterval(interval)
//     })
// }


// More optimised solution

function randomColor(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

let interval
function startProcess(){
    function changeColor(){
        document.querySelector('body').style.backgroundColor = randomColor()
    }

    if(!interval){
        interval = setInterval(changeColor, 1000)
    }
}


function stopProcess(){
    clearInterval(interval)
    interval = null         // value set to null so that it is not getting overwritten everytime
}


document.querySelector('#start').addEventListener('click', startProcess)


document.querySelector('#stop').addEventListener('click', stopProcess)