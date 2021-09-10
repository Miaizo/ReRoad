// 字面量写法
const twoSum = function (nums, target) {
  const diffs = {}
  const len = nums.length
  for (let i = 0;i < len;i++) {
    if (diffs[target - nums[i]] !== undefined) {
      return [diffs[target - nums[i]], i]
    }
    diffs[nums[i]] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9))

// Map储存键值对
const twoSum = function (nums, target) {
  const diffs = new Map()
  const len = nums.length
  for (let i = 0;i < len;i++) {
    if (diffs.get(target - nums[i]) !== undefined) {
      return [diffs.get(target - nums[i]), i]
    }
    diffs.set(nums[i], i)
  }
}

console.log(twoSum([2, 7, 11, 15], 9))