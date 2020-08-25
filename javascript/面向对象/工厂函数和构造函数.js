//字面量写法
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw")
  }
}

//改造成工厂函数
function factory(radius) {
  return {
    radius: radius,
    draw: function() {
      console.log("draw")
    }
  }
}

let circle1 = factory(1)
circle1.draw()

//改造成构造函数
function constrcture(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("create")
  }
}

let circle2 = new constrcture(1)
circle2.draw()