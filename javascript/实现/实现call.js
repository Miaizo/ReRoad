Function.prototype.myCall = function(ctx) {
  ctx = ctx || window // ctx 就是 obj
  let fn = Symbol()
  ctx[fn] = this // this 就是 foo
  let arg = [...arguments].slice(1)
  let result = ctx[fn](...arg)
  delete ctx[fn]
  return result
}

// let obj = {name: 'miaizo'}
// function foo () {
//   return this.name;
// }

// console.log(foo.myCall(obj))

// Function.prototype.myCall = function (ctx) {
//   ctx.fn = this;
//   ctx.fn();
//   delete ctx.fn;
// }

let obj = {
  name: 'miaizo',
  age: 12
};

function foo (age = 13) {
  console.log(this.age)
  console.log(age)
  console.log(this.name);
}

foo.call(null);
foo.myCall(null);