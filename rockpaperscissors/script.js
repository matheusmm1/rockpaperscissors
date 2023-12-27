// variables that store the scores
let playerScore = 0;
let computerScore = 0;

//global variables that store the player's and the computer's picks
let playerPick;
let computerPick = computerChoice();

// button variables
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playAgainButton = document.getElementById("playAgain");

//disabling the playAgainButton until it is needed
playAgainButton.disabled = true;

// events that happen after clicking buttons
rockButton.addEventListener('click', function () {
    game('rock')
});
paperButton.addEventListener('click', function () {
    game('paper')
});
scissorsButton.addEventListener('click', function () {
    game('scissors')
}); 


// function used to assign a choice to the computer
function computerChoice() {
    const gameOptions = ['rock', 'paper', 'scissors'];
    const randomOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return randomOption;
}

// function that plays one round of the game
function playRound(playerPick, computerPick) {


    if (playerPick === computerPick) {
        return roundResult.textContent= "You both chose " + playerPick + " , it's a draw!"
    } else if (playerPick === 'rock' && computerPick === 'scissors') {
        playerScore++;
        return roundResult.textContent= "The computer chose scissors, you win!";  
    } else if (playerPick === 'scissors' && computerPick === 'paper') {
        playerScore++;
        return roundResult.textContent= "The computer chose paper, you win!";    
    } else if (playerPick === 'paper' && computerPick === 'rock') {
        playerScore++;
        return roundResult.textContent= "The computer chose rock, you win!";      
    } else {
        computerScore++;
        return roundResult.textContent= "The computer chose " + computerPick + " , you lose!";   
    }
    
}

//function that plays 5 rounds
function game(pick) {
    roundResult.textContent = playRound(pick, computerChoice())
    yourScore.textContent = `You- ${playerScore}`;
    pcScore.textContent = `Computer- ${computerScore}`;
    if (playerScore == 5) {
        roundResult.textContent = "You won!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playAgainButton.disabled = false;
        rockBtn.className = "optionsAfterGame";

      } else if (computerScore == 5) {
        roundResult.textContent = "You lost!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playAgainButton.disabled = false;
      }      

}

//restart button

playAgainButton.addEventListener('click', function () {
    playerScore = 0;
    computerScore = 0;
    roundResult.textContent = ""
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    playAgainButton.disabled = true;
    yourScore.textContent = `You- ${playerScore}`;
    pcScore.textContent = `Computer- ${computerScore}`;
})