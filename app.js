const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  // Math.random gets random numbers brtween 0 and 3
  // Math.floor  gets rid of the decimal number. So, the choices will be (0,1,2)
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win() {
  console.log("WIN");
}

function lose() {
  console.log("LOSE");
}

function draw() {
  console.log("DRAW");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "rp":
    case "sr":
    case "ps":
      lose();
    break;
    case "rr":
    case "ss":
    case "pp":
      draw();
    break;
  }
}

function main(){
  rock_div.addEventListener('click', function() {
    game('r');
  })

  paper_div.addEventListener('click', function() {
    game('p');
  })

  scissors_div.addEventListener('click', function() {
    game('s');
  })
  scissors_div.addEventListener('click', function() {
    game('s');
  })
}

main();
