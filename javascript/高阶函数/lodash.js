const _ = require('lodash');
// const array = ['jack', 'tom', 'lucy', 'kate']

// console.log(_.first(array));

// console.log(_.last(array));

// console.log(_.toUpper(_.first(array)));

// console.log(_.reverse(array));

// _.each(array, (item, index) => {
//   console.log(item, index);
// })

function getArea (r) {
  console.log(r);
  return Math.PI * r * r;
}

// let getAreaMemory = _.memoize(getArea);
// console.log(getAreaMemory(4));
// console.log(getAreaMemory(4));
// console.log(getAreaMemory(4));

// 实现缓存memoize
function memoize (fn) {
  let cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    cache[key] = cache[key] || fn.apply(fn, arguments);
    return cache[key];
  }
}

let getAreaMemory = memoize(getArea);
console.log(getAreaMemory(4));
console.log(getAreaMemory(4,6));
console.log(getAreaMemory(4));
