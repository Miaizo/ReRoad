// 循环（速度中等）
function sumTo (n) {
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum
}

// 递归（速度最慢）
function sumTo (n) {
  if (n === 1) {
    return 1
  }
  return n + sumTo(n - 1)
}

// 等差数列公式（速度最快）
function sumTo (n) {
  return (n*(n+1)) / 2
}

console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(100))