let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
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

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = userChoice + "Beats" + computerChoice + "You win!";
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
      win(userChoice + computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice + computerChoice);
    break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice + computerChoice);
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
}

main();
