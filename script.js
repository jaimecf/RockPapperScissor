//let playerMove = prompt("Make your Move: Rock, Paper or Scissors");
let playerScore = 0;
let computerScore = 0;
//playerScore++;


function computerPlay() {
    let num = Math.random();

    if (num > 0.66) {
        return "ROCK";
    } else if(num > 0.33 && num < 0.66) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }; 
}


//Receber e armazenar jogada do Player
//Executar e armazenar jogada aleatoria 
//Comparar a jogada do Player com a jogada aleatoria
//Armazenar o resultado do vencedor da ronda
//Executar este processo ate um dos players somar 3 pontos
//Declarar vencedor