// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw() {
//     console.log("draw")
//   }
// }

// circle.draw()

function createCircle(radius){
  return {
    radius,
    draw() {
      console.log("draw")
    }
  }
}

const circle1 = createCircle(1)
circle1.draw()

function Circle(radius){
  this.radius = radius;
  this.draw = () => {
    console.log("pic")
  }
}

const circle2 = new Circle(2)
circle2.draw()

