// 1.模拟forEach
// function forEach (arr, fn) {
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i])
//   }
// }

// forEach([1,2,3,4,5], (item) => {
//   console.log(item)
// })

// 2.模拟filter
// function filter (arr, fn) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// let res = filter([1,2,3,4,5], (item) => {
//   return item > 3;
// })
// console.log(res)

// 3.函数作为返回值
// function makeFn () {
//   let msg = 'hello';
//   return function () {
//     console.log(msg);
//   }
// }

// makeFn()();

// 4.模拟once (对一个函数只执行一次)
// function once (fn) {
//   let done = false;
//   return function () {
//     if (!done) {
//       done = true;
//       return fn.apply(this, arguments);
//     }
//   }
// }

// let pay = once(function (money) {
//   console.log(money);
// })

// pay(5);
// pay(5);
// pay(5);

// 5.模拟map
// const map = (arr, fn) => {
//   let results = [];
//   for (let value of arr) {
//     results.push(fn(value));
//   }
//   return results;
// }

// let msg = map([1,2,3], (item) => item * item);
// console.log(msg);

// 6.模拟every
// const every = (arr, fn) => {
//   let results = true;
//   for (let value of arr) {
//     results = fn(value);
//     if (!results) {
//       break;
//     }
//   }
//   return results;
// }

// let msg = every([1,2,3], (item) => item < 4);
// console.log(msg);

// 7.模拟some
// const some = (arr, fn) => {
//   let results = false;
//   for (let value of arr) {
//     results = fn(value);
//     if (results) {
//       break;
//     }
//   }
//   return results;
// }

// let msg = some([1,2,3], (item) => item === 4);
// console.log(msg);