const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const gameTune = document.getElementById('game-tune');
const explosionTune = document.getElementById('explosion-tune');
const playerOneLives = document.getElementById('player1_lives');
const playerTwoLives = document.getElementById('player2_lives');

class Game {
  constructor(context) {
    this.context = context;
    this.firstBike = new Bike(canvas.width * .07, canvas.height / 2, 10, 0, 3, 0, 'magenta');
    this.secondBike = new Bike(canvas.width * .93, canvas.height / 2, 10, 0, -3, 0, 'cyan');
    this.gameLoop = this.gameLoop.bind(this);
    this.gameStart = this.gameStart.bind(this);
    this.requestId = undefined;
    this.gameTimeOut = 0;
  }

  gameStart() {
    this.playAudio(gameTune);
    requestAnimationFrame(this.gameLoop);
  }

  gameLoop() {
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
    
    if (this.firstBike.crashed) {
      this.playAudio(explosionTune);
      this.firstBike.lives -= 1;
      this.playerReset();
      this.pause(1000);
      if (this.firstBike.lives === 0) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.endGame('PLAYER TWO WINS!', 'magenta');
        this.pause(5000);
        location.reload();
      }
      return;
    }
    
    if (this.secondBike.crashed) {
      this.playAudio(explosionTune);
      this.secondBike.lives -= 1;
      this.playerReset();
      this.pause(1000);  
      if (this.secondBike.lives === 0){
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.endGame('PLAYER ONE WINS!', 'cyan')
        this.pause(5000);
        location.reload();
      }
      return;
    }
    this.firstBike.loseLife(playerOneLives);
    this.secondBike.loseLife(playerTwoLives);
    }
  
    playAudio(audio) {
    audio.play();
    }

    stopAudio(audio) {
      audio.pause();
    }

    playerReset() {
      this.stopAudio(gameTune);
      this.playAudio(explosionTune);
      this.firstBike.tail = [];
      this.secondBike.tail = [];
      this.secondBike.crashed = false;
      this.firstBike.crashed = false;
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.playAudio(gameTune);
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

    endGame(winner, color) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = "900 50px Orbitron";
      context.fillStyle = color;
      context.textAlign = "center";
      context.fillText(winner, canvas.width / 2, canvas.height / 3);
      }

    pause(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
  }

}


module.exports = Game;