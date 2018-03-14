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
}

module.exports = Bike;