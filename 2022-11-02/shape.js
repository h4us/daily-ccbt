import g from "./global.js";

class Shape {
  constructor(x, y, color = "rgb(0, 0, 0)") {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

class Rectangle extends Shape {
  constructor(x, y, color = "rgb(0, 0, 0)") {
    super(x, y, color);
  }

  draw = () => {
    g.ctx.save();
    g.ctx.beginPath();
    g.ctx.fillStyle = this.color;
    g.ctx.fillRect(this.x, this.y, g.GRID_SIZE, g.GRID_SIZE);
    g.ctx.restore();
  };
}

class Circle extends Shape {
  constructor(x, y, color = "rgb(0, 0, 0)") {
    super(x, y, color);
  }

  draw = () => {
    g.ctx.save();
    g.ctx.fillStyle = this.color;
    g.ctx.ellipse(
      this.x - g.GRID_SIZE / 2 + g.GRID_SIZE,
      this.y - g.GRID_SIZE / 2 + g.GRID_SIZE,
      g.GRID_SIZE / 2,
      g.GRID_SIZE / 2,
      0,
      0,
      Math.PI * 2,
      0
    );
    g.ctx.fill();
    g.ctx.restore();
  };
}

class Arc extends Shape {
  constructor(x, y, angle = 0, color = "rgb(0, 0, 0)") {
    super(x, y, color);
    this.angle = angle;
  }
  draw = () => {
    g.ctx.save();
    g.ctx.fillStyle = this.color;
    g.ctx.translate(this.x + g.GRID_SIZE / 2, this.y + g.GRID_SIZE / 2);
    g.ctx.rotate(this.angle);
    g.ctx.translate(-this.x - g.GRID_SIZE / 2, -this.y - g.GRID_SIZE / 2);
    g.ctx.beginPath();
    g.ctx.moveTo(this.x, this.y + g.GRID_SIZE);
    g.ctx.ellipse(
      this.x + g.GRID_SIZE,
      this.y + g.GRID_SIZE,
      g.GRID_SIZE,
      g.GRID_SIZE,
      0,
      Math.PI,
      Math.PI + Math.PI / 2,
      0
    );
    g.ctx.lineTo(this.x + g.GRID_SIZE, this.y + g.GRID_SIZE);
    g.ctx.closePath();
    g.ctx.fill();
    g.ctx.restore();
  };
}

class Triangle extends Shape {
  constructor(x, y, angle = 0, color = "rgb(0, 0, 0)") {
    super(x, y, color);
    this.angle = angle;
  }

  draw = () => {
    g.ctx.save();
    g.ctx.fillStyle = this.color;
    g.ctx.translate(this.x + g.GRID_SIZE / 2, this.y + g.GRID_SIZE / 2);
    g.ctx.rotate(this.angle);
    g.ctx.translate(-this.x - g.GRID_SIZE / 2, -this.y - g.GRID_SIZE / 2);
    g.ctx.beginPath();
    g.ctx.moveTo(this.x + g.GRID_SIZE, this.y);
    g.ctx.lineTo(this.x + g.GRID_SIZE, this.y + g.GRID_SIZE);
    g.ctx.lineTo(this.x, this.y + g.GRID_SIZE);
    g.ctx.fill();
    g.ctx.restore();
  };
}

export { Rectangle, Circle, Arc, Triangle };
