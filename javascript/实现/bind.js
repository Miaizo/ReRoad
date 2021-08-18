Function.prototype.myBind = function (ctx) {
  const self = this;
  const fn = function () {};
  const bind = function () {
    const _this = this instanceof fn ? this : ctx;
    return self.apply(_this, [...arguments, ...arguments]);
  };
  fn.prototype = this.prototype;
  bind.prototype = new fn();
  return bind;
}

let obj = {
  value: 1
}

function foo () {
  console.log(this.value);
}

const fn = foo.myBind(obj);
console.log(fn)

