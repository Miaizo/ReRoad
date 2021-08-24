const _ = require('lodash')

// flow从左到右 flowRight从右到左
const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

// const f = _.flowRight(toUpper, first, reverse)

// console.log(f(['one', 'two', 'three']))

function compose1 (...args) {
  return function (value) {
    return args.reduce((acc, fn) => {
      return fn(acc)
    }, value)
  }
}

const f1 = compose1(reverse, first, toUpper)

console.log(f1(['one', 'two', 'three']))

const compose2 = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value);

const f2 = compose2(toUpper, first, reverse)

console.log(f2(['one', 'two', 'three']))
