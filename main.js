const options = ['rock', 'paper', 'scissor'];
const rounds = 4;

let currentRound = 1;
let humanScore = 0;
let computerScore = 0;

const btnPlay = document.getElementById('play');
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissor = document.getElementById('scissor');

btnRock.onclick = () => getPlayerChoice('rock');
btnPaper.onclick = () => getPlayerChoice('paper');
btnScissor.onclick = () => getPlayerChoice('scissor');
let computerWeapon;

function getComputerChoice() {
  let ComputerChoice = Math.floor(Math.random() * 3);

  switch (ComputerChoice) {
    case 0:
      computerWeapon = options[0];
      break;
    case 1:
      computerWeapon = options[1];
      break;
    case 2:
      computerWeapon = options[2];
      break;
  }

  return computerWeapon;
}



function getPlayerChoice(btn) {
  let ComputerChoice = getComputerChoice();
  let humanChoice = btn;

  if (humanChoice == ComputerChoice) {
  } else if (
    (humanChoice == options[0] && ComputerChoice == options[2]) ||
    (humanChoice == options[1] && ComputerChoice == options[0]) ||
    (humanChoice == options[2] && ComputerChoice == options[1])
  ) {
    humanScore++;
  } else {
    computerScore++;
  }

  alert(
    'Voce escolheu: ' +
      humanChoice +
      '\ncomputador escolheu: ' +
      ComputerChoice +
      '\n seu seu score: ' +
      humanScore +
      '\nstore da maquina: ' +
      computerScore
  );
  if (currentRound == rounds) {
    currentRound = 1;
    if (humanScore > computerScore) {
      alert(
        'Fim de jogo, você venceu! \n Score final: ' +
          humanScore +
          ' a ' +
          computerScore
      );
      humanScore = 0;
      computerScore = 0;
    } else if (humanScore < computerScore) {
      alert(
        'Fim de jogo, você perdeu! \n Score final: ' +
          humanScore +
          ' a ' +
          computerScore
      );
      humanScore = 0;
      computerScore = 0;
    } else {
      alert(
        'Fim de jogo, voces empataram! \n Score final: ' +
          humanScore +
          ' a ' +
          computerScore
      );
      humanScore = 0;
      computerScore = 0;
    }
  } else {
    currentRound++;
  }
}
