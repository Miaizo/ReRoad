const _ = require('lodash')
// 柯里化函数
// function checkAge (min) {
//   return function (age) {
//     return age >= min;
//   }
// }

// ES6
// const checkAge = min => (age => age >= min)
// const checkAge18 = checkAge(18)

// console.log(checkAge18(20))
// console.log(checkAge18(24))
// console.log(checkAge18(18))

// lodash的柯里化方法
function getSum (a, b, c) {
  return a + b + c
}

const curry = curry1(getSum);

console.log(curry(1)(2)(3));
console.log(curry(1, 2)(3));
console.log(curry(1, 2, 3));

// 柯里化案例
// const match = _.curry(function (reg, str) {
//   return str.match(reg);
// })

// const haveNumber = match(/\d/g);

// console.log(haveNumber('12str2et5t123'))

// const filter = _.curry((fn, arr) => {
//   return arr.filter(fn);
// })

// const findNumber = filter(haveNumber);
// console.log(findNumber(['12', 'st', '1st']))

// 实现柯里化
// function curry1 (fn) {
//   return function curryFn(...args) {
//     if (args.length < fn.length) {
//       return function () {
//         return curryFn(...args.concat([...arguments]))
//       }
//     }
//     return fn(...args)
//   }
// }

// function reduce (...args) {
//   return args.reduce((a, b) => a + b)
// }

// let add = curry1(reduce)
// console.log(add(1,2,3,4,5))
// console.log(add(1)(2,3)(4,5))
// console.log(add(1,2,3,4,5))
