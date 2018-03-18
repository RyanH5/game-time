const Bike = require('./Bike.js');
const canvas = document.getElementById('game');
const context = canvas.getContext('2d');

class Game {
  constructor(context) {
    this.context = context;
    this.firstBike = new Bike(20, 380, 5, 0, 1, 0, 'cyan');
    this.secondBike = new Bike(820, 380, 5, 0, -1, 0, 'magenta');
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
    this.secondBike.collisionDetection(this.secondBike);
    this.firstBike.collisionDetection(this.firstBike);

  }; 
}


module.exports = Game;



