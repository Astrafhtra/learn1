var sumNumbers = function(root){
  return helper(root,0)
}
function helper(node,cur){
  if(node === null){
    return 0
  }
  const next = node.val + cur*10
  if(node.left === null && node.right === null){
    return next
  }
  const l = helper(node.left,next)
  const r = helper(node.right,next)
  return l + r
}
function treeNode(val){
  this.val = val;
  this.left = this.right = null
}
let a1 = new treeNode(4)
let a2 = new treeNode(9)
let a3 = new treeNode(0)
let a4 = new treeNode(5)
let a5 = new treeNode(1)

a1.left = a2
a1.right = a3
a2.left = a4
a2.right = a5

console.log(sumNumbers(a1))


