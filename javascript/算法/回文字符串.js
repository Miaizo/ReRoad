// 判断回文字符串方法一
console.time('test')
const isPalindrome = function (str) {
  const reverseStr = str.split('').reverse().join('');
  return reverseStr === str;
}

// 判断回文字符串方法二
// console.time('test')
// const isPalindrome = function (str) {
//   const len = str.length;
//   for (let i = 0;i < len / 2;i++) {
//     if (str[i] !== str[len - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }

const str = 'abcba';
console.log(isPalindrome(str))
console.timeEnd('test')

