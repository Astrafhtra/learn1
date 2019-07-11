// 快排 抽象 递归
// [8, 2, 5, 9, 7]
function quickSort(arr) {
  // left a   base 中间值  right b
  if (arr.length <= 1) { return arr; }
  var left = [], right = [],
    // 找到长度的中间值
    baseDot = Math.round(arr.length / 2),
    base = arr.splice(baseDot, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([base], quickSort(right))
}
console.log(quickSort([8, 2, 5, 9, 7]))


