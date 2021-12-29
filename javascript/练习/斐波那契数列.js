// function fib(n) {
//   if (n <= 1) {
//     return n
//   }
//   return fib(n - 1) + fib(n - 2)
// }

// 动态规划
function fib(n) {
  let a = 1, b = 1;
  for (let i = 3;i <= n;i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))