window.alert("Enjoy a game of Rock Paper Scissors! Choose the number of Rounds (up to 5), and When prompted type in your move, either 'Rock', 'Paper' or 'Scissors' (not case sensitive). You will be playing against the computer, which will select its moves randomly. The first to win the defined number of rounds shall be declared the WINNER!");

window.alert("Are you ready to play?")

game(prompt("Choose the number of rounds", 5));

let playerMove = prompt("Make your Move: Rock, Paper or Scissors");
let playerScore = 0;
let computerScore = 0;

function computerMove() {
    let num = Math.random();

    if (num > 0.66) {
        return "ROCK";
    } else if(num > 0.33 && num < 0.66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }; 
}
function playRound(playerMove, computerMove) {
    let player = playerMove.toUpperCase();
    let computer = computerMove.toUpperCase();

    console.log(player);
    console.log(computer);

    if(player === computer) {
        return "Tie!";
    } else if(player === "ROCK" && computer === "PAPER") {
        return "You Lose! Paper beats Rock";
    } else if(player === "ROCK" && computer === "SCISSORS") {
        return "You Win! Rock beats Scissors";
    } else if(player === "PAPER" && computer === "SCISSORS") {
        return "You Lose! Scissors beat Paper";
    } else if(player === "PAPER" && computer === "ROCK") {
        return "You Win! Paper beats Rock";
    } else if(player === "SCISSORS" && computer === "ROCK") {
        return "You Lose! Rock beats Scissors";
    } else if(player === "SCISSORS" && computer === "PAPER") {
        return "You Win! Scissors beat Paper";
    }
}

function game(numberOfRounds) {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < numberOfRounds; i++) {
        let result = playRound(prompt("Type (ROCK, PAPER, SCISSORS)"), computerMove());
        console.log(result);

        if(/Win/.test(result)) {
            playerScore+=1;
        } else if(/Lose/.test(result) || result === undefined){
            computerScore+=1;
        }

        console.log(`${playerScore}:${computerScore}`);
    }

    if(playerScore > computerScore) {
        console.log("YOU ARE THE WINER :) ");
    } else if(playerScore < computerScore) {
        console.log("YOU LOOSE! TRY AGAIN..");
    } else if(playerScore === computerScore) {
        console.log("TIE");
    }
}

//Declarar vencedor - Função que faça prompt do vencedor???
