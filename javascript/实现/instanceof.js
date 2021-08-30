function myInstanceof(left, right) {
  // 获得实例对象的原型 也就是 left.__proto__
  let left = Object.getPrototypeOf(left)
  // 获得构造函数的原型
  let prototype = right.prototype
  // 判断构造函数的原型 是不是 在实例的原型链上
  while (true) {
    // 原型链一层层向上找，都没找到 最终会为 null
    if (left === null) return false
    if (prototype === left) return true
    // 没找到就把上一层拿过来，继续循环，再向上一层找
    left = Object.getPrototypeOf(left)
  }
}


