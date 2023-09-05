const WIN = true;
const LOSE = false;
const TIE = null;
let playerWins = 0;
let computerWins = 0;

// Returns the choice the computer made
function getComputerChoice(){
    // Constants representing which number corresponds to which choice
    const ROCK = 0,
        PAPER = 1,
        SCISSORS = 2;
    let computerChoice = Math.floor(Math.random()*3);
    switch(computerChoice){
        case ROCK: return "rock"
        case PAPER: return "paper"
        case SCISSORS: return "scissors"
    }
}

function setChoiceSymbols(playerChoice, computerChoice) {
    const playerSymbol = document.querySelector('#player-selection');
    const computerSymbol = document.querySelector('#computer-selection');
    switch (playerChoice) {
        case 'rock': playerSymbol.textContent = "✊";
            break;
        case 'paper': playerSymbol.textContent = "✋";
            break;
        case 'scissors': playerSymbol.textContent = "✌";
            break;
    }

    switch (computerChoice) {
        case 'rock': computerSymbol.textContent = "✊";
            break;
        case 'paper': computerSymbol.textContent = "✋";
            break;
        case 'scissors': computerSymbol.textContent = "✌";
            break;
    }
}

// Returns an array with the first element being the message to display and whether the player won
function playRound(playerSelection){
    playerSelection = String(playerSelection).toLowerCase();
    const computerSelection = getComputerChoice();
    setChoiceSymbols(playerSelection, computerSelection);
    // Check who won
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return ["Rock beats scissors.", WIN];
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return ["Scissors beats paper.", LOSE];
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return ["Both chose scissors.", TIE];
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return ["Paper beats rock.", LOSE];
    } else if(playerSelection === 'paper' && computerSelection === 'paper') {
        return ["Both chose paper", TIE];
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return ["Scissors beats paper.", WIN];
    } else if(playerSelection === 'rock' && computerSelection === 'rock') {
        return ["Both chose rock.", TIE];
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return ["Paper beats rock.", WIN];
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return ["Rock beats scissors.", LOSE];
    }
}

// Plays rock, paper, scissors 5 times with the player
function game(){
    // Play 5 times
    for(let index = 0; index < 5; index++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Make your choice: Rock, paper, or scissors?");
        playerSelection = String(playerSelection).toLowerCase();
        // If the player enters something other than 'rock', 'paper', or 'scissors', repeat prompt until they make a valid choice
        if(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
            while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
                playerSelection = prompt("Inavlid Answer! Make your choice: Rock, paper, or scissors?");
            }
        }
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        alert(result);
    }
}

const buttons = document.querySelectorAll('button.option-button');
const winStatus = document.querySelector('.result');
const msg = document.querySelector('.sub-result');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', () => {
    const playerSelection = String(button.id);
    const results = playRound(playerSelection);
    msg.textContent = results[0];
    switch (results[1]) {
        case WIN:
            winStatus.textContent = "You Win!";
            playerWins++
            break;
        case LOSE:
            winStatus.textContent = "You Lose!";
            computerWins++;
            break;
        case TIE:
            winStatus.textContent = "Tie!"
            break;
    }
}));