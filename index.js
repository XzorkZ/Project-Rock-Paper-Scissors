// list of strings
const strings = ['rock', 'paper', 'scissors'];

// scores
let computerScore = 0;
let playerScore = 0;

// computer will choose random string from the list above.
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * strings.length);
    const randomString = strings[randomIndex];
    return randomString;
}

//clear text
function clearWinnerText(){
    const winnerText = document.querySelector("#message");
    winnerText.textContent = "May the best person win";
}

//enable button
function enableButton(){
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}

//disable button
function disableBtn(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

// Game mode: function will compare 2 selectionsand return result, if input is correct
function playRound(playerSelection, computerSelection) {

    const message = document.getElementById("message");


    if (playerSelection === computerSelection){
        message.textContent = "It's Draw!";
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || 
            (playerSelection === "paper" && computerSelection === "scissors") || 
            (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        message.textContent = "Computer Win!";
    }
    else {
        playerScore++;
        message.textContent = "Player Win!";
    }
    updateScore();
    isGameOver();
}


// update score everytime player make a choise
function updateScore() {
    const showPlayerScore = document.getElementById('playerScore');
    showPlayerScore.textContent = playerScore;

    const showComputerScore = document.getElementById('computerScore');
    showComputerScore.textContent = computerScore;
}

// check if the game is over or not
function isGameOver() {
    const winnerText = document.querySelector("#message");
    if (playerScore >= 5){
        disableBtn();
        winnerText.textContent = "Player won the match!";
    }
    else if (computerScore >= 5){
        disableBtn();
        winnerText.textContent = "Computer won the match!";
    }
}

//Play Again
const playAgainBtn = document.querySelector("#playAgain");
playAgainBtn.addEventListener("click", function(){
        computerScore = 0;
        playerScore = 0;
        updateScore();
        clearWinnerText();
        enableButton();
});


//user input
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function(){
    playRound("rock", getComputerChoice());
    updateScore();
    isGameOver()
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", function(){
    playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
});










