let arr = [1, 1, "1", "1", true, true, "true", {a: 1}, {a: 1}, "{}",[] ,[], null, null, undefined, undefined, NaN, NaN];

// 1.两层循环去重(不能去除{}、NaN)
function unique1 (array) {
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  return res;
}

console.log(unique1(arr));

// 2.indexOf改进版，与1原理相同(不能去除{}、NaN)
function unique2 (arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(unique2(arr));

// 3.Object键值对方法去除(可以去除相同的{}、NaN)
function unique3(array) {
  let obj = {};
  return array.filter((item, index, array) => {
      // console.log(typeof item + JSON.stringify(item))
      return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
  })
}
console.log(unique3(arr));

// 4.用new Set() (不能去除相同对象，但可以去除NaN)
let unique4 = [...new Set(arr)];

console.log(unique4);

// 5.同new Set
const unique5 = arr => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(unique5(arr))