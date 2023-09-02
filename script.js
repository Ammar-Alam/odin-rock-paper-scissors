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