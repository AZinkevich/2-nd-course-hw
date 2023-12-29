function area() {
  return this.w * this.h;
}

function perimeter() {
  return (this.w + this.h) * 2;
}

const square1 = {
  w: 20,
  h: 30,
  a: area,
  p: perimeter,
};

const square2 = {
  w: 10,
  h: 50,
  a: area,
  p: perimeter,
};

console.log(square1.a());
console.log(square2.a());
console.log(square1.p());
console.log(square2.p());