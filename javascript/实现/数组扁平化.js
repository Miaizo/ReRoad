let arr = [1, [2], [3, [4]]];

// 1.使用数组flat方法
console.log(arr.flat(Infinity));

// 2.使用reduce
let arr1 = arr => {
  let brr = arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? arr1(val) : val);
  }, [])
  return brr
}

console.log(arr1(arr))

// 3.使用字符串转换替换
let crr = JSON.parse( "[" + JSON.stringify(arr).replace(/\[|\]/g, "") + "]")

console.log(crr)