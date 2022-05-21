class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //adds two vectors together
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  //finds the difference between two vectors
  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  //gets and calculates the distance between two vector points x and y
  get length() {
    return Math.sqrt(this.x * this.x, this.y * this.y);
  }
}

console.log(new Vec(2, 4).plus(new Vec(5, 7)));

console.log(new Vec(3, 2).minus(new Vec(5, 3)));

console.log(new Vec(4, 5).length);
