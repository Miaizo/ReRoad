Function.prototype.myApply = function (ctx) {
  // 1.判断ctx是否为null
  ctx = ctx || window;
  // 2.为ctx挂载的fn命名(symbol为唯一值保证不重名)
  let fn = Symbol();
  // 3.将foo方法也就是this挂载到ctx[fn]上
  ctx[fn] = this;
  let result;
  // 4.判断有参数和没有参数的情况
  if (arguments[1]) {
    result = ctx[fn](...arguments[1]);
  } else {
    result = ctx[fn]();
  }
  // 5.删除ctx[fn]
  delete ctx[fn];
  // 6.返回result
  return result;
}

let arr = [2, 4, 8, 6, 10]

// console.log(Math.max.apply(null, arr));
console.log(Math.max.myApply(null, arr));