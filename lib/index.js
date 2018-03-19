const Game = require('./Game.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const game = new Game(context, canvas.width, canvas.height);

const playerOneControls = document.getElementById('D_Pad_One');
const playerTwoControls = document.getElementById('D_Pad_Two');

document.addEventListener('keydown', game.firstBike.pOneDirection);
document.addEventListener('keydown', game.secondBike.pTwoDirection);

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
      playerOneControls.src = "images/PlayerOneA.png";
    }

    //up
    if (e.keyCode == 87) {
      playerOneControls.src = "images/PlayerOneW.png";
    }

    //right
    if (e.keyCode == 68) {
      playerOneControls.src = "images/PlayerOneD.png";
    }

    //down
    if (e.keyCode == 83) {
      playerOneControls.src = "images/PlayerOneS.png";
    }
    
    if (e.keyCode == 37) {
      playerTwoControls.src = "images/PlayerTwoLeft.png";
    }

    //up
    if (e.keyCode == 38) {
      playerTwoControls.src = "images/PlayerTwoUp.png";
    }

    //right
    if (e.keyCode == 39) {
      playerTwoControls.src = "images/PlayerTwoRight.png";
    }

    //down
    if (e.keyCode == 40) {
      playerTwoControls.src = "images/PlayerTwoDown.png";
    }
  }
);
document.addEventListener('keydown', game.secondBike.pTwoDirection);

document.addEventListener('click', game.gameStart);

