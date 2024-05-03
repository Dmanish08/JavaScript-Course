let randomNum = Math.floor(Math.random()*100 + 1)

const form = document.querySelector('form')


let guessDisplay = document.querySelector('#prev-guess')
let remGuess = document.querySelector('#rem-guess')
const guessInput = document.querySelector('#guess-field')
const resPanel = document.querySelector('.results')
const messageDisplay = document.querySelector('#message')

const p = document.createElement('p')

let playGame = true
let prevGuess = []
let guessCount = 10
                            
if (playGame){
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const userInput = parseInt(guessInput.value)
        console.log(userInput);
        validateGuess(userInput)
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        displayMessage(`Please enter a valid number`)
    }else if (guess < 1 || guess > 100){
        displayGuess(`Please enter a number between 1 and 100`)
    }else{
        prevGuess.push(guess)
        if (guessCount == 0){
            displayMessage(`Game over! The number was ${randomNum}`)
            endGame()
        }else{
            --guessCount
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess){
    if (guess > randomNum){
        displayMessage(`Oops! The number you entered is too high.`)
    }else if (guess < randomNum){
        displayMessage(`Oops! The number you entered is too low`)
    }else {
        displayMessage(`Congrats! You have guessed the right number. The number was ${randomNum}`)
        endGame()
    }
}


function displayGuess(guess){
    guessDisplay.innerHTML = prevGuess
    guessInput.value = ''
    remGuess.innerHTML = guessCount
}


function displayMessage(message){
    messageDisplay.innerHTML = message
}


function endGame(){
    playGame = false
    guessInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="new-game">Start New Game</h2>'
    resPanel.appendChild(p)

    newGame()
}


function newGame(){
    const newGameButton = document.querySelector('#new-game')

    newGameButton.addEventListener('click', () => {
        guessInput.removeAttribute('disabled')
        prevGuess = []
        guessCount = 10
        messageDisplay.innerHTML = ''
        guessDisplay.innerHTML = ''
        remGuess.innerHTML = guessCount
       
        resPanel.removeChild(p)

        playGame = true
    })
}