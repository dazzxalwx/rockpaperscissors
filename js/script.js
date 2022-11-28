console.log('Hello, World!')
const choices = ['rock', 'paper', 'scissors']


function getComputerChoice() {
    switch (computerSelection) {
        case 0:
            // ROCK console.log('Computer chose ROCK!')
            computerSelection = 'rock'
            // console.log('Computer chose ROCK!')
            break;
        case 1:
            // PAPER
            computerSelection = 'paper'
            // console.log('Computer chose PAPER!')
            break;
        case 2:
            //SCISSORS
            computerSelection = 'scissors'
            // console.log('Computer chose SCISSORS!')
            break;
    }
}

let playerSelection = prompt('Rock Paper or Scissors!').toLowerCase();
let computerSelection = Math.floor(Math.random() * 3)

function playRound(playerSelection, computerSelection) {
    console.log(`Player chose ${playerSelection.toUpperCase()}!`)
    console.log(`Computer chose ${computerSelection.toUpperCase()}!`)

    if (choices.includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! It's a Tie!`)
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
        }
    } else {
        alert('Wrong input! You must say Rock Paper or Scissors!')
    }
}
getComputerChoice()
playRound(playerSelection, computerSelection)