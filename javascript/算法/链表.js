function ListNode (val) {
  this.val = val;
  this.next = null;
}

// 合并有序链表
function mergeTwoLists (l1, l2) {
  let head = new ListNode();
  let cur = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 !== null ? l1 : l2;
  return head.next;
}

const l1 = new ListNode(1);
l1.next = new ListNode(3);
const l2 = new ListNode(2);
l2.next = new ListNode(4);

console.log(JSON.stringify(mergeTwoLists(l1, l2)));