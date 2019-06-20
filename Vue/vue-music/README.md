安装 stylus :npm install stylus --save-dev
            npm install stylus-loader --save-dev

弹性容器 
 justify-content：center 水平居中
 align-items center 垂直居中
 flex-direction:column 垂直排列盒子
 flex-direction:row  水平排列盒子
在弹性布局中，text-align：center 没用


插槽 slot
  通常我们在定义组件的时候设置一个插槽，本来组件里面是不能放东西，但是当我们在组件里面挖了一坑后 这个组件可以有一个谁调用这个组件就能往这个组件里面插入东西 
  意义：让组件灵活性更高，组件里面只用写结构就行，内容由插进去的东西决定
