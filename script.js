class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x, this.y * this.y);
  }
}

console.log(new Vec(2, 4).plus(new Vec(5, 7)));
// → Vec{x: 3, y: 5}
console.log(new Vec(3, 2).minus(new Vec(5, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(4, 5).length);
// → 5
