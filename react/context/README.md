## context
  跨组件之间的数据传递
  this.props
  父->子->孙
  父->后代组件
  被react-router react-redux广泛使用

##问题
  shouldComponentUpdate
  尽可能少渲染
  return true
  return false 不更新
  如果中间某个组件 shouldComponentUpdate false后代组件不会更新

## context 16

  
