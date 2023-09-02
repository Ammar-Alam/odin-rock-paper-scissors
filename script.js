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

// Returns who won the round as a string
function playRound(playerSelection, computerSelection){
    playerSelection = String(playerSelection).toLowerCase();
    // Check who won
    if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You win! Rock beats scissors.";
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You lose! Scissors beats paper."
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "Tie!"
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock."
    } else if(playerSelection === 'paper' && computerSelection === 'paper') {
        return "Tie!"
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper."
    } else if(playerSelection === 'rock' && computerSelection === 'rock') {
        return "Tie!"
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock."
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors."
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

game();