class Single {
  show() {
    console.log('我是一个单例')
  }
}

// const s1 = new Single();
// const s2 = new Single();

// console.log(s1===s2)

// 1.class实现单例
// class Single {
//   static one() {
//     if (!Single.instance) {
//       Single.instance = new Single();
//     }
//     return Single.instance;
//   }
//   show() {
//     console.log('我是一个单例')
//   }
// }

// const s1 = Single.one();
// const s2 = Single.one();

// console.log(s1===s2)

// 2.闭包实现单例
Single.one = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Single();
    }
    return instance
  }
})()


const s1 = Single.one();
const s2 = Single.one();

console.log(s1 === s2)