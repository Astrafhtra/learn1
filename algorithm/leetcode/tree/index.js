function treeNode(val){
  // let rootNode =this;
  // let leftNode = a;
  // let rightNode =b;
  this.val = val;
  this.right = this.left = null;

}
// [[3],[9,20],[15,7]]
let a1 = new treeNode(3);
let a2 = new treeNode(9);
let a3 = new treeNode(20);
let a4 = new treeNode(15);
let a5 = new treeNode(7);

a1.left = a2;
a1.right = a3;
a3.left = a4;
a3.right = a5;

// 层序遍历
function levelOrderTraversal(root){
  if(!root) return [];
  const items = []; //存放所有的结点,返回的结果
  const queue = [root,null]; //当前所在处理层的队列
  let levelNodes = [];//每层的结点

  while(queue.length > 0){
    const t = queue.shift();
    if(t){
      // 真实的结点
      levelNodes.push(t.val);
      if(t.left){
        queue.push(t.left);
      }
      if(t.right){
        queue.push(t.right)
      }
    }else{
      // null,层与层之间的分界符
        items.push(levelNodes);
        levelNodes = [];
        if(queue.length > 0){
          queue.push(null)
        }
    }
  }
  return items
}