
console.log("Hello World!")

const rps = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const random = Math.floor(Math.random() * rps.length)
    return rps[random]
}

// const computerSelection = getComputerChoice();

// function playerSelection() {

// }

// const playerSelection = "rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Tie!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock Beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Tie!"
    }
}

// console.log(playRound(playerSelection, computerSelection))

