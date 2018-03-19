const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const playerOneLives = document.getElementById('player1_lives');
const playerTwoLives = document.getElementById('player2_lives');

class Game {
  constructor(context) {
    this.context = context;
    this.firstBike = new Bike(20, canvas.height / 2, 10, 0, 3, 0, 'magenta');
    this.secondBike = new Bike(820, canvas.height / 2, 10, 0, -3, 0, 'cyan');
    this.gameLoop = this.gameLoop.bind(this);
    this.gameStart = this.gameStart.bind(this);
  }

  gameStart() {
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

  }
}


module.exports = Game;



