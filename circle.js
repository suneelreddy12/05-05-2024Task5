// Since TypeScript wasn't within our grasp at the time of the question, I tackled it using JavaScript instead.
class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  getRadius() {
    return this._radius;
  }

  setRadius(radius) {
    this._radius = radius;
  }

  getColor() {
    return this._color;
  }

  setColor(color) {
    this._color = color;
  }

  // Method to calculate area
  getArea() {
    return Math.PI * this._radius * this._radius;
  }

  // Method to calculate circumference
  getCircumference() {
    return 2 * Math.PI * this._radius;
  }

  // toString method
  toString() {
    return `Circle[radius=${this._radius}, color=${this._color}]`;
  }
}

const circle = new Circle(3.0, "black");

console.log(circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());

const circle1 = new Circle();

console.log(circle1.toString());
console.log(circle1.getArea());
console.log(circle1.getCircumference());
