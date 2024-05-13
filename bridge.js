class Shape {
    constructor(drawer) {
      this.drawer = drawer;
    }
  
    draw() {
      throw new Error('draw() method must be implemented');
    }
  }

  class CanvasDrawer {
    drawCircle(x, y, radius) {
      console.log(`Drawing circle at (${x},${y}) with radius ${radius} on canvas.`);
    }
  }
  
  class SvgDrawer {
    drawCircle(x, y, radius) {
      console.log(`Drawing circle at (${x},${y}) with radius ${radius} in SVG.`);
    }
  }
  
  class Circle extends Shape {
    constructor(drawer, x, y, radius) {
      super(drawer);
      this.x = x;
      this.y = y;
      this.radius = radius;
    }
  
    draw() {
      this.drawer.drawCircle(this.x, this.y, this.radius);
    }
  }

  const canvasDrawer = new CanvasDrawer();
  const svgDrawer = new SvgDrawer();
  
  const circle1 = new Circle(canvasDrawer, 10, 10, 5);
  circle1.draw();
  
  const circle2 = new Circle(svgDrawer, 20, 20, 8);
  circle2.draw();