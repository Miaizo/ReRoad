function factorial (n) {
  if (n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

// 用0做判断会多一次调用
function factorial (n) {
  return n ? n * factorial (n - 1) : 1
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))