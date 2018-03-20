const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const gameTune = document.getElementById('game-tune');
const playerOneLives = document.getElementById('player1_lives');
const playerTwoLives = document.getElementById('player2_lives');

class Game {
  constructor(context) {
    this.context = context;
    this.firstBike = new Bike(canvas.width * .07, canvas.height / 2, 10, 0, 3, 0, 'magenta');
    this.secondBike = new Bike(canvas.width * .93, canvas.height / 2, 10, 0, -3, 0, 'cyan');
    this.gameLoop = this.gameLoop.bind(this);
    this.gameStart = this.gameStart.bind(this);
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
    this.firstBike.loseLife(playerOneLives);
    this.secondBike.loseLife(playerTwoLives);
    if (this.firstBike.crashed) {
      this.firstBike.tail = [];
      this.secondBike.tail = [];
      this.firstBike.crashed = false;
      this.secondBike.crashed = false;
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.firstBike.x = canvas.width * .07;
      this.firstBike.y = canvas.height / 2;
      this.secondBike.x = canvas.width * .93;
      this.secondBike.y = canvas.height / 2;
      this.firstBike.xDir = 3;
      this.firstBike.yDir = 0;
      this.secondBike.xDir = -3
      this.secondBike.yDir = 0;
      this.firstBike.lives -= 1;
      return;
    }
    if (this.secondBike.crashed) {
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
      this.secondBike.lives -= 1;
      return;
    }
  }
  
    playAudio(audio) {
    audio.play();
    }

}


module.exports = Game;