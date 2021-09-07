function iteratorGenerator(list) {
  let idx = 0;
  let len = list.length;
  return {
    next: function () {
      let done = idx >= len;
      let value = !done ? list[idx++] : undefined;
      return {
        done: done,
        value: value
      }
    }
  }
}

const iterator = iteratorGenerator(['1', '2', '3'])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())