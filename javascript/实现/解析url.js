// 解析url参数转换成对象
function getUrlParmas (url) {
  let reg = /([^?&=]+)=([^?&=]+)/;
  let obj = {};
  url.replace(reg, function () {
    obj[arguments[1]] = arguments[2];
  })
  return obj;
}

// 用例
let url = 'https://www.junjin.cn?a=1&b=2';
let result =  getUrlParmas(url);  // { a: '1', b: '2' }
console.log(result);
// 说明
// [Arguments] {
//   '0': 'a=1',
//   '1': 'a',
//   '2': '1',
//   '3': 22,
//   '4': 'https://www.junjin.cn?a=1&b=2'
// }
// [Arguments] {
//   '0': 'b=2',
//   '1': 'b',
//   '2': '2',
//   '3': 26,
//   '4': 'https://www.junjin.cn?a=1&b=2'
// }