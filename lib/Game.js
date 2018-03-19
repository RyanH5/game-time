const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const playerOneLives = document.getElementById('player1_lives');
const playerTwoLives = document.getElementById('player2_lives');

class Game {
  constructor(context) {
    this.context = context;
    this.firstBike = new Bike(20, canvas.height / 2, 10, 0, 1, 0, 'magenta');
    this.secondBike = new Bike(820, canvas.height / 2, 10, 0, -1, 0, 'cyan');
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
    console.log(this.firstBike.x)
    
    this.secondBike.collisionDetection(this.firstBike);
    this.firstBike.collisionDetection(this.secondBike);
    this.secondBike.collisionDetection(this.secondBike);
    this.firstBike.collisionDetection(this.firstBike);
    this.firstBike.loseLife(playerOneLives);
    this.secondBike.loseLife(playerTwoLives);
    if(this.firstBike.distanceBetween(this.firstBike.x, this.firstBike.y, this.secondBike.x, this.secondBike.y) < this.firstBike.radius + this.secondBike.radius || this.secondBike.distanceBetween(this.firstBike.x, this.firstBike.y, this.secondBike.x, this.secondBike.y) < this.firstBike.radius + this.secondBike.radius) {
      this.firstBike.xDir = 0;
      this.firstBike.yDir = 0;
      this.secondBike.xDir = 0;
      this.secondBike.yDir = 0;
    }
  }; 
}




module.exports = Game;



