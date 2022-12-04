let choices = ['rock', 'paper', 'scissors'];

let playerScore = 0
let computerScore = 0
let round = 0


function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

/*
function getPlayerChoice() {
    return prompt('Rock Paper or Scissors').toLowerCase()

}
*/

const rockBtn = document.querySelector('.rockBtn')
const paperBtn = document.querySelector('.paperBtn')
const scissorsBtn = document.querySelector('.scissorsBtn')

const result = document.querySelector('.result')
result.querySelectorAll('h1')

const roundCount = document.querySelector('.round')
roundCount.querySelectorAll('h2')

const scores = document.querySelector('.score')
scores.querySelectorAll('h3')

document.body.appendChild(roundCount)
document.body.appendChild(result)
document.body.appendChild(scores)


rockBtn.addEventListener("click", () => {
    console.log('ROCK!')
    playerSelection = 'rock'
    playRound(playerSelection, getComputerChoice())

});

paperBtn.addEventListener("click", () => {
    console.log('PAPER!')
    playerSelection = 'paper'
    playRound(playerSelection, getComputerChoice())
});

scissorsBtn.addEventListener("click", () => {
    console.log('SCISSORS!')
    playerSelection = 'scissors'
    playRound(playerSelection, getComputerChoice())
});



let computerSelection = getComputerChoice()
//let playerSelection = getPlayerChoice()


// return playerScore++
// return computerScore++

// console.log(computerSelection)
// console.log(playerSelection)
// console.log(round)

function playRound(playerSelection, computerSelection) {
    if (choices.includes(playerSelection)) {
        if (playerSelection === computerSelection) {
            // console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! It's a Tie!`)
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! It's a Tie!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore} CPU`
            roundCount.innerHTML = `Round #${round}`
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            // console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
            round + 0
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`
            scores.innerHTML = `Player ${playerScore + 1} - ${computerScore} CPU`
            return playerScore++
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            // console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore + 1} CPU`
            return computerScore++
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            // console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore + 1} CPU`
            return computerScore++
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            // console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`
            scores.innerHTML = `Player ${playerScore + 1} - ${computerScore} CPU`
            return playerScore++
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            // console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`)
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You win!`
            scores.innerHTML = `Player ${playerScore + 1} - ${computerScore} CPU`
            return playerScore++
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            // console.log(`Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`)
            round++
            result.innerHTML = `Player chose ${playerSelection.toUpperCase()}! Computer chose ${computerSelection.toUpperCase()}! You lose!`
            scores.innerHTML = `Player ${playerScore} - ${computerScore + 1} CPU`
            return computerScore++
        }
        /*
    } else {
        alert('Wrong input! You must say Rock Paper or Scissors!')
        console.log(`Wrong input! You must say Rock Paper or Scissors!`)
        return
    }
    */
    }
}

/*
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
*/