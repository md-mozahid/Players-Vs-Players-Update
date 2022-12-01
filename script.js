

//selection
const formElm = document.querySelector('form')
const inputElm = document.querySelector('.number')
const winningMsg = document.querySelector('.winning-msg')
const winnerScore = document.querySelector('.winner-score span')
const p1ScoreElm = document.querySelector('.player1')
const p2ScoreElm = document.querySelector('.player2')
const players = document.querySelectorAll('.playerBtn')
const p1Btn = document.querySelector('.p1Btn')
const p2Btn = document.querySelector('.p2Btn')
const toss = document.querySelector('.toss')
const tossWinnerMsg = document.querySelector('.tossWinnerMsg')
const resetBtn = document.querySelector('.resetBtn')

//set winning score randomly
const winScore = Math.floor(Math.random() * (10 - 5) + 3)
winnerScore.textContent = winScore

//toss round
//player buttons disabled by default
    p1Btn.setAttribute('disabled', 'disabled')
    p2Btn.setAttribute('disabled', 'disabled')

toss.addEventListener('click', (evt) => {
    const i = Math.floor(Math.random() * 2)
    players[i].removeAttribute('disabled')
    tossWinnerMsg.textContent = `Player ${i + 1} won the toss`
    toss.setAttribute('disabled', 'disabled')
})

//initialization
let p1Score = 0
let p2Score = 0
let isGameOver = false

//reset value
function resetValue() {
    inputElm.value = ''
}

//validation
function validateInput(inputVal) {
    isInValid = true
    if(!inputVal || inputVal !== inputVal) {
        alert('Please input valid number')
        isInValid = true
    }
    return isInValid
}

//event handling
formElm.addEventListener('submit', (evt) => {
    evt.preventDefault()

    //validation
    const inputVal = Number(inputElm.value)
    validateInput(inputVal)
    
    //reset input value
    resetValue()

    //set value to win score
    winnerScore.textContent = inputVal
})

//setting on player one value
p1Btn.addEventListener('click', (evt) => {
    if(!isGameOver) {
        p1Score++
        // p1Score += Math.floor(Math.random() * 2)
        p1ScoreElm.textContent = p1Score
        p1Btn.setAttribute('disabled', 'disabled')
        p2Btn.removeAttribute('disabled')
        if(winScore === p1Score) {
            winningMsg.textContent = 'Player 1 is won'
            p1Btn.setAttribute('disabled', 'disabled')
            p2Btn.setAttribute('disabled', 'disabled')
        }
    }
})

p2Btn.addEventListener('click', (evt) => {
    if(!isGameOver) {
        p2Score++
        // p2Score += Math.floor(Math.random() * 2)
        p2ScoreElm.textContent = p2Score
        p2Btn.setAttribute('disabled', 'disabled')
        p1Btn.removeAttribute('disabled')
        if(winScore === p2Score) {
            winningMsg.textContent = 'Player 2 is won'
            p1Btn.setAttribute('disabled', 'disabled')
            p2Btn.setAttribute('disabled', 'disabled')
        }
    }
})

resetBtn.addEventListener('click', (evt) => {
    winningMsg.textContent = ''
    winnerScore.textContent = winScore
    p1ScoreElm.textContent = 0
    p2ScoreElm.textContent = 0
    p1Btn.removeAttribute('disabled')
    p2Btn.removeAttribute('disabled')
    toss.removeAttribute('disabled')
    tossWinnerMsg.textContent = ''
})