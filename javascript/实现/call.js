Function.prototype.myCall = function(ctx) {
  // 1.判断ctx是否为null
  ctx = ctx || window
  // 2.为ctx挂载的fn命名(symbol为唯一值保证不重名)
  let fn = Symbol()
  // 3.将foo方法也就是this挂载到ctx[fn]上
  ctx[fn] = this
  // 4.解决有参数的情况取出arguments从第二个到最后一个
  let arg = [...arguments].slice(1)
  // 5.执行ctx[fn]赋值到result
  let result = ctx[fn](...arg)
  // 6.删除ctx[fn]
  delete ctx[fn]
  // 7.返回result
  return result
}

let obj = {
  value: 7
};

function foo (name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

foo.myCall(obj, 'miaizo', 18);