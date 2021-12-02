const arr = [5, 1, 3, 2, 7]
const bubbleSort = (arr) => {
  const len = arr.length
  for (let i=0;i<len;i++) {
    let flag = false
    for (let j=0;j< len-1;j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
      flag = true
    }
    if (flag === false) return arr
  }
  return arr
}

console.log(bubbleSort(arr))