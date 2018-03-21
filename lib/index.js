const Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(context, canvas.width, canvas.height);
const playerOneControls = document.getElementById('D_Pad_One');
const playerTwoControls = document.getElementById('D_Pad_Two');
document.addEventListener('keydown', game.firstBike.pOneDirection);
document.addEventListener('keydown', game.secondBike.pTwoDirection);
document.addEventListener('keydown', function (e) {
  if (e.keyCode == 65) {
    playerOneControls.src = "images/PlayerOneA.png";
  }
  if (e.keyCode == 87) {
    playerOneControls.src = "images/PlayerOneW.png";
  }
  if (e.keyCode == 68) {
    playerOneControls.src = "images/PlayerOneD.png";
  }
  if (e.keyCode == 83) {
    playerOneControls.src = "images/PlayerOneS.png";
  }

  if (e.keyCode == 37) {
    playerTwoControls.src = "images/PlayerTwoLeft.png";
  }
  if (e.keyCode == 38) {
    playerTwoControls.src = "images/PlayerTwoUp.png";
  }
  if (e.keyCode == 39) {
    playerTwoControls.src = "images/PlayerTwoRight.png";
  }
  if (e.keyCode == 40) {
    playerTwoControls.src = "images/PlayerTwoDown.png";
  }
}
);
document.addEventListener('keyup', function (e) {
  if (e.keyCode == 65) {
    playerOneControls.src = "images/PlayerOneDefault.png";
  }
  if (e.keyCode == 87) {
    playerOneControls.src = "images/PlayerOneDefault.png";
  }
  if (e.keyCode == 68) {
    playerOneControls.src = "images/PlayerOneDefault.png";
  }
  if (e.keyCode == 83) {
    playerOneControls.src = "images/PlayerOneDefault.png";
  }
  if (e.keyCode == 37) {
    playerTwoControls.src = "images/PlayerTwoDefault.png";
  }
  if (e.keyCode == 38) {
    playerTwoControls.src = "images/PlayerTwoDefault.png";
  }
  if (e.keyCode == 39) {
    playerTwoControls.src = "images/PlayerTwoDefault.png";
  }
  if (e.keyCode == 40) {
    playerTwoControls.src = "images/PlayerTwoDefault.png";
  }
}
);
canvas.focus();
document.addEventListener('keydown', game.secondBike.pTwoDirection);

document.addEventListener('click', game.gameStart);


function startScreen(text, color) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "900 55px Orbitron";
  context.fillStyle = color;
  context.textAlign = "center";
  context.fillText(text, canvas.width / 2, canvas.height / 2);
}

startScreen('CLICK TO START', 'cyan');