function findKLargest(nums,k) {
  const arr = quick_sort(nums)
  const arrs = arr.reverse()
  return arrs[k -1]
}

function quick_sort(arr) {
  if (arr.length <= 1) return arr
  var left = [],
      right = [],
      baseDet = Math.round(arr.length / 2) // 找到中间的下标
      base = arr.splice(baseDet,1)[0]; // 找到中间的那个数
  for(var i = 0; i < arr.length; i++) {// O(n)
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quick_sort(left).concat([base],quick_sort(right)); // 递归 先写
}

console.log(findKLargest([1,9,10,2],3))