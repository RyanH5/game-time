class Bike {
  constructor(x, y, width, height, color, xDir, yDir) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.xDir = xDir;
    this.yDir = yDir;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  };

  move(xDir, yDir) {
    this.x += this.xDir;
    this.y += this.yDir;
    return this;
  };

  changeDirection(x, y) {
    this.xDir = x;
    this.yDir = y;
  };

  pTwoDirection(e) {
    //left
    if (e.keyCode == 37) {
      console.log('left');
      secondBike.changeDirection(-1, 0);
    }

    //up
    if (e.keyCode == 38) {
      console.log('up');
      secondBike.changeDirection(0, -1);
    }

    //right
    if (e.keyCode == 39) {
      console.log('right');
      secondBike.changeDirection(1, 0);
    }

    //down
    if (e.keyCode == 40) {
      console.log('down');
      secondBike.changeDirection(0, 1);
    }
  }

  pOneDirection(e) {
    //left
    if (e.keyCode == 65) {
      console.log('left');
      firstBike.changeDirection(-1, 0);
    }

    //up
    if (e.keyCode == 87) {
      console.log('up');
      firstBike.changeDirection(0, -1);
    }

    //right
    if (e.keyCode == 68) {
      console.log('right');
      firstBike.changeDirection(1, 0);
    }

    //down
    if (e.keyCode == 83) {
      console.log('down');
      firstBike.changeDirection(0, 1);
    }
  }
}

module.exports = Bike;