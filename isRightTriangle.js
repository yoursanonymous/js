const multiply = (x, y) => x * y;

const sq = x => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    return sq(a) + sq(b) === sq(c);
}
console.log("BEFORE")
// isRightTriangle(3,4,5)
console.log("AFTER")