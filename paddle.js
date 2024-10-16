class Paddle {
  constructor() {
    this.x;
    this.y;
    
    this.w = 15;
    this.h = 50;
  }
  display() {
    rect(this.x, this.y, this.w, this.h);
  }
}