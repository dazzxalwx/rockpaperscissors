let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

/*
function getPlayerChoice() {
    return prompt('Rock Paper or Scissors').toLowerCase()

}
*/

let computerSelection = getComputerChoice()
//let playerSelection = getPlayerChoice()

let playerScore = 0
let computerScore = 0
let round = 0

// return playerScore++
// return computerScore++

// console.log(computerSelection)
// console.log(playerSelection)
// console.log(round)


function playRound(playerSelection, computerSelection) {
    if (choices.includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! It's a Tie!`)
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
            round + 0
            return playerScore++
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
            round++
            return computerScore++
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
            round++
            return computerScore++
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
            round++
            return playerScore++
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
            round++
            return playerScore++
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
            round++
            return computerScore++
        }
    } else {
        alert('Wrong input! You must say Rock Paper or Scissors!')
        console.log(`Wrong input! You must say Rock Paper or Scissors!`)
        return
    }
}



function game() {

    for (let i = 0; round < 5; i++) {
        console.log(`Round #${round}`)
        playerSelection = prompt('Rock Paper or Scissors').toLowerCase()
        computerSelection = choices[Math.floor(Math.random() * 3)]
        playRound(playerSelection, computerSelection)
        console.log(`Player ${playerScore} - ${computerScore} CPU`)

        if (round === 5 && playerScore > computerScore) {
            console.log(`Player won Rock Paper Scissors!`)
            console.log(`Score: Player ${playerScore} - ${computerScore} CPU`)
        } else if (round === 5 && playerScore < computerScore) {
            console.log(`CPU won Rock Paper Scissors! `)
            console.log(`Score: Player ${playerScore} - ${computerScore} CPU`)
        }
    }
}

game()