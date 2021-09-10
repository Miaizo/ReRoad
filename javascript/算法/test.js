const merge = function (l1, l2) {
  let i = l1.length - 1, j = l2.length - 1, k = l1.length + l2.length - 1;
  while(i >= 0 && j >= 0) {
    if (l1[i] >= l2[j]) {
      l1[k] = l1[i];
      i--;
      k--;
    } else {
      l1[k] = l2[j];
      j--;
      k--;
    }
  }
  return l1;
}

let nums1 = [1,2,3,5,6];
let nums2 = [2,5,6];
console.log(merge(nums1, nums2))
// console.log(nums1)