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
    if (this.firstBike.crashed || this.secondBike.crashed) {
      // console.log(this.firstBike)
      this.firstBike.tail = [];
      this.secondBike.tail = [];
      this.firstBike.crashed = false;
      this.secondBike.crashed = false;
      // function clearScreen(){
      //   var myClear = setTimeout(function() {context.clearRect(0, 0, canvas.width, canvas.height)}, 2000);
      // }
      // clearScreen();
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.firstBike = new Bike(canvas.width * .07, canvas.height / 2, 10, 0, 3, 0, 'magenta');
      this.secondBike = new Bike(canvas.width * .93, canvas.height / 2, 10, 0, -3, 0, 'cyan');
      this.firstBike.lives -= 1;
      // console.log(this.firstBike);
      return;
    }
  }
  
    playAudio(audio) {
    audio.play();
    }

}


module.exports = Game;