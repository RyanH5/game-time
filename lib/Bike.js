class Bike {
  constructor(x, y, width, height, color, xDir, yDir) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.xDir = xDir;
    this.yDir = yDir;
    this.pOneDirection = this.pOneDirection.bind(this);
    this.pTwoDirection = this.pTwoDirection.bind(this);
    this.tail = [];
    this.crashed = false;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  };

  move(xDir, yDir) {
    this.x += this.xDir;
    this.y += this.yDir;
    this.tail.push({ x: this.x, y: this.y }); 
   debugger;
    return this;
  };

  clearTail(context) {
    if (this.tail.length > 1000) {
      var coords = this.tail.shift();
      context.clearRect(coords.x, coords.y, this.width, this.height)
    }
  }

  changeDirection(x, y) {
    this.xDir = x;
    this.yDir = y;
  };

  pTwoDirection(e) {
    //left
    if (e.keyCode == 37) {
      e.preventDefault();
      this.changeDirection(-1, 0);
    }

    //up
    if (e.keyCode == 38) {
      e.preventDefault();
      this.changeDirection(0, -1);
    }

    //right
    if (e.keyCode == 39) {
      e.preventDefault();
      this.changeDirection(1, 0);
    }

    //down
    if (e.keyCode == 40) {
      e.preventDefault();
      this.changeDirection(0, 1);
    }
  }

  pOneDirection(e) {
    //left
    if (e.keyCode == 65) {
      console.log('left');
      this.changeDirection(-1, 0);
    }

    //up
    if (e.keyCode == 87) {
      console.log('up');
      this.changeDirection(0, -1);
    }

    //right
    if (e.keyCode == 68) {
      e.preventDefault();
      this.changeDirection(1, 0);
    }

    //down
    if (e.keyCode == 83) {
      console.log('down');
      this.changeDirection(0, 1);
    }
  }

  sideCollision() {
    if (this.x < 0 || this.x > 991) {
      this.xDir = 0;
      this.yDir = 0;
      // updateScore();
    }
    // if bike.x < 0 || bike.x > context.width stop xDir
    // trigger end game function
    // call updateScore
  }

  verticalCollision() {
    if (this.y < 0 || this.y > 740) {
      this.xDir = 0;
      this.yDir = 0;
      // updateScore();
    }
  }

  collisionDetection(oppositeBike) {
    for (var i = 0; i < oppositeBike.tail.length - 1; i++) {
      let trailCoordinate = oppositeBike.tail[i];

      if (this.xDir > 0 &&  trailCoordinate.x === this.x + 10 && trailCoordinate.y === this.y || 
         this.xDir < 0 && trailCoordinate.x + 10 === this.x && trailCoordinate.y === this.y || 
         this.yDir > 0 && trailCoordinate.x === this.x && trailCoordinate.y === this.y + 10 || 
         this.yDir < 0 && trailCoordinate.x === this.x + 10 && trailCoordinate.y + 10 === this.y) {
  
      this.crashed = true;
      this.xDir = 0;
      this.yDir = 0;
    }
  }
  return false;
}
}

module.exports = Bike;