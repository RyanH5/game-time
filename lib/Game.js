const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const gameTune = document.getElementById('game-tune');
const explosionTune = document.getElementById('explosion-tune');
const turnTune = document.getElementById('turn-tune');
const playerOneLives = document.getElementById('player1_lives');
const playerTwoLives = document.getElementById('player2_lives');
gameTune.volume = 0.3;
explosionTune.volume = 1;

class Game {
  constructor(context) {
    this.context = context;
    this.firstBike = new Bike(canvas.width * .07, canvas.height / 2, 10, 0, 3, 0, 'magenta');
    this.secondBike = new Bike(canvas.width * .93, canvas.height / 2, 10, 0, -3, 0, 'cyan');
    this.gameLoop = this.gameLoop.bind(this);
    this.gameStart = this.gameStart.bind(this);
    this.requestId = undefined;
    this.gameTimeOut = 0;
    this.gameOver = false;
    this.winner = null;
    this.winnerColor = null;
  }

  gameStart() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    this.playAudio(gameTune);
    requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
    if (!this.gameOver) {
      this.runGame();
    } else {
      this.endGame();
      this.pause(3000);
      this.gameOver = false;
      this.firstBike.lives = 5;
      this.secondBike.lives = 5;
    }
  }

  runGame() {
    console.log("gameover", this.gameOver);
    console.log("winner", this.winner);
    this.firstBike.move().draw(context).clearTail(context);
    this.secondBike.move().draw(context).clearTail(context);

    requestAnimationFrame(this.gameLoop);
    this.firstBike.sideCollision();
    this.firstBike.verticalCollision();
    this.secondBike.sideCollision();
    this.secondBike.verticalCollision();
    this.secondBike.collisionDetection(this.firstBike);
    this.firstBike.collisionDetection(this.secondBike);
    this.secondBike.distanceBetweenSelf();
    this.firstBike.distanceBetweenSelf();
    this.firstBike.loseLife(playerOneLives);
    this.secondBike.loseLife(playerTwoLives);

    if (this.firstBike.crashed && this.secondBike.crashed) {
      this.playAudio(explosionTune);
      this.firstBike.lives -= 1;
      this.secondBike.lives -= 1;
      this.playerReset();
      this.checkGameOver();
      return;
    }

    if (this.firstBike.crashed) {
      this.playAudio(explosionTune);
      this.firstBike.lives -= 1;
      this.playerReset();
      this.checkGameOver();
      return;
    }

    if (this.secondBike.crashed) {
      this.playAudio(explosionTune);
      this.secondBike.lives -= 1;
      this.playerReset();
      this.checkGameOver();
      return;
    }
  }
  
    playAudio(audio) {
    audio.play();
    }

    playerReset() {
      
      this.playAudio(explosionTune);
      this.firstBike.tail = [];
      this.secondBike.tail = [];
      this.secondBike.crashed = false;
      this.firstBike.crashed = false;
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.firstBike.x = canvas.width * .07;
      this.firstBike.y = canvas.height / 2;
      this.secondBike.x = canvas.width * .93;
      this.secondBike.y = canvas.height / 2;
      this.firstBike.xDir = 3;
      this.firstBike.yDir = 0;
      this.secondBike.xDir = -3
      this.secondBike.yDir = 0;
      this.firstBike.draw(context);
      this.secondBike.draw(context);
    }

    endGame() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = "900 60px Orbitron";
      context.fillStyle = this.winnerColor;
      context.textAlign = "center";
      context.fillText(this.winner, canvas.width / 2, canvas.height / 2.5);
      context.font = "400 50px Orbitron";
      context.fillStyle = this.winnerColor;
      context.textAlign = "center";
      context.fillText('CLICK TO PLAY AGAIN', canvas.width / 2, canvas.height / 2);
      
      }


    pause(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
  }

    checkGameOver() {
      if (this.firstBike.lives === 0 ) {
        this.gameOver = true;
        this.winner = 'PLAYER TWO WINS!';
        this.winnerColor = this.firstBike.color;
        this.firstBike.loseLife(playerOneLives);
        // this.secondBike.loseLife(playerTwoLives);
      } else if (this.secondBike.lives === 0 ) {
        this.gameOver = true;
        this.winner = 'PLAYER ONE WINS!';
        this.winnerColor = this.secondBike.color;
        // this.firstBike.loseLife(playerOneLives);
        this.secondBike.loseLife(playerTwoLives);
        
        
          
      }
    }

}


module.exports = Game;