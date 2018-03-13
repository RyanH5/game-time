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

  move() {
    this.x += this.xDir;
    return this;
  };
}

module.exports = Bike;