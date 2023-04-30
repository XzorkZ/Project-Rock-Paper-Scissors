// list of strings
const strings = ['rock', 'paper', 'scissors'];

// scores
let computerScore = 0;
let playerScore = 0;
let gameRounds = 0;

// play 5 rounds
while (gameRounds < 5) {
    // computer will choose random string from the list above.
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * strings.length);
        const randomString = strings[randomIndex];
        return randomString;
    }

    // Game mode: function will compare 2 selectionsand return result, if input is correct
    function playRound(playerSelection, computerSelection) {
        if (playerSelection == false) {
            return "Wrong Input!";
        }

        if (playerSelection === computerSelection){
            return "It's Draw!";
        }
        else if ((playerSelection === "rock" && computerSelection === "paper") || 
                (playerSelection === "paper" && computerSelection === "scissors") || 
                (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            return `You lost! ${computerSelection} beats ${playerSelection}.`;
            
        }
        else {
            playerScore++;
            return "You Win!";
        }
    }
    gameRounds++;

    // user input, call function, show score
    const playerSelection = userInput();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`computer: ${computerScore}, player: ${playerScore}, Round: ${gameRounds}`);

    
    // User Input (in lower case) and check if it is wrriten correct
    function userInput() {
        let playerSelection = prompt('Please choose rock, paper or scissors').toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            return playerSelection;
        }
        else {
            return false;
        }    
    }
}







