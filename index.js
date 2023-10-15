class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, side) => total + side, 0);
    }
}

class Triangle extends Polygon {
    isValid() {
        if (this.countSides === 3) {
            const [a, b, c] = this.sides;
            return a + b > c && a + c > b && b + c > a;
        }
        return false;
    }
}

class Square extends Polygon {
    isValid() {
        if (this.countSides === 4) {
            const firstSide = this.sides[0];
            return this.sides.every(side => side === firstSide);
        }
        return false;
    }

    get area() {
        if (this.isValid()) {
            return this.sides[0] * this.sides[0];
        }
    }
}

