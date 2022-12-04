let choices = ['rock', 'paper', 'scissors'];

let playerScore = 0
let computerScore = 0
let round = 0


function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorsBtn = document.querySelector('.scissorsBtn')

const result = document.querySelector('.result')
result.querySelectorAll('h1')

const winner = document.querySelector('.winner')
winner.querySelectorAll('h1')

const roundCount = document.querySelector('.round')
roundCount.querySelectorAll('h2')

const scores = document.querySelector('.score')
scores.querySelectorAll('h3')

document.body.appendChild(roundCount)
document.body.appendChild(result)
document.body.appendChild(winner)
document.body.appendChild(scores)


rockBtn.addEventListener("click", () => {
    console.log('ROCK!')
    playerSelection = 'rock'
    playGame(playerScore, computerScore)

});

paperBtn.addEventListener("click", () => {
    console.log('PAPER!')
    playerSelection = 'paper'
    playGame(playerScore, computerScore)
});

scissorsBtn.addEventListener("click", () => {
    console.log('SCISSORS!')
    playerSelection = 'scissors'
    playGame(playerScore, computerScore)
});

let computerSelection = getComputerChoice()

function playGame(playerScore, computerScore) {
    if (round === 5 && playerScore > computerScore) {
        winner.innerHTML = 'Player wins!'
        console.log(`Player won Rock Paper Scissors!`)
        console.log(`Score: Player ${playerScore} - ${computerScore} CPU`)
    } else if (round === 5 && playerScore < computerScore) {
        winner.innerHTML = 'CPU wins!'
        console.log(`CPU won Rock Paper Scissors! `)
        console.log(`Score: Player ${playerScore} - ${computerScore} CPU`)
    }
    playRound(playerSelection, computerSelection)
}


function playRound(playerSelection, computerSelection) {
    if (choices.includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! It's a Tie!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore} CPU`
            roundCount.innerHTML = `Round #${round}`
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            round + 0
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`
            scores.innerHTML = `Player ${playerScore + 1} - ${computerScore} CPU`
            return playerScore++
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore + 1} CPU`
            return computerScore++
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore + 1} CPU`
            return computerScore++
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`
            scores.innerHTML = `Player ${playerScore + 1} - ${computerScore} CPU`
            return playerScore++
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`
            scores.innerHTML = `Player ${playerScore + 1} - ${computerScore} CPU`
            return playerScore++
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore + 1} CPU`
            return computerScore++
        }
    }
}
