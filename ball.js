class Ball {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.r = 50;
    
    this.speed = 5;
  }
  display() {
    circle(this.x, this.y, this.r);
  }
}