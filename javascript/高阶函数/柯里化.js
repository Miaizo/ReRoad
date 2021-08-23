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

function getSum (a, b, c) {
  return a + b + c
}

const curry = _.curry(getSum);

console.log(curry(1)(2)(3));
console.log(curry(1, 2)(3));
console.log(curry(1, 2, 3));