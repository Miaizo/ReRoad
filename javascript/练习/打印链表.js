let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// 递归
function printList(list) {
  // 正序
  console.log(list.value)
  if (list.next) {
    printList(list.next)
  }
  // 倒序
  console.log(list.value)
}

// printList(list)

// 循环
// function printList(list) {
//   let tmp = list;
//   let res = []
//   while (tmp) {
//     // console.log(tmp.value);
//     res.push(tmp.value)
//     tmp = tmp.next;
//   }
//   for (let i = res.length - 1; i >= 0; i--) {
//     console.log(res[i])
//   }
// }

printList(list)