const _ = require('lodash');

// const array = ['jack', 'tom', 'lucy', 'kate']

// console.log(_.first(array));

// console.log(_.last(array));

// console.log(_.toUpper(_.first(array)));

// console.log(_.reverse(array));

// _.each(array, (item, index) => {
//   console.log(item, index);
// })

// 实现缓存memoize
function getArea (r) {
  return Math.PI * r * r;
}

let getAreaMemory = _.memoize(getArea(4));
getAreaMemory();
getAreaMemory();
getAreaMemory();

function memoize () {
  let a = 1;
  return function () {
    console.log(a);
  }
}

memoize()();
