- 小程序为什么要框架？
  原生写小程序 有组件化,但是语法好怪,vue,react开发者,学习成本高
  taro(react) mpvue(vue) 让开发者不用小程序就可以写了
  命令行工具,可以安装一堆npm包,极大的扩展了小程序的功能
  complie src -> dist/


- JSX
  XML in JS,react template 新的语法
  JSX -> babel ->preset react -> JS
  render(){
    return(

    )
  }
  react 没有v-for v-if 指令
  原生写
  <View>
  {
    this.state.lists.map((item,index)=>{
            return <View>
              ...
            </View>
          })
  }
  </View>