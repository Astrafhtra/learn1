import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'Taro首页'
  }

  constructor(props){
    super(props);//将Component基类的方法,执行一下,要用constructor 一定要先super一下
    // 状态初始化 data=>state
    this.state = {
      lists:[
        '5:00起床',
        'coding',
        '23:59 sleep'
      ],
      inputVal:''
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    let {lists,inputVal} = this.state
    return (
      <View className='index'>
        <Input className="input" type="text" value={inputVal} onInput={this.inputHandle.bind(this)}/>
        <Text className="add" onClick={this.addItem.bind(this)}>添加</Text>
        {
          lists.map((item,index)=>{
            return <View>
              <text>{index + 1} : {item}</text>
              <Text className="del" onClick={this.handleDelete.bind(this)}>删除</Text>
            </View>
          })
        }
      </View>
    )
  }
  inputHandle(e){
    this.inputVal = e.target.value
  }
  addItem(){
    let {lists} = this.state
    const inputVal = this.inputVal
    if(inputVal == '') return;
    else{
      lists.push(inputVal)
    }
    this.setState({
      lists,
      inputVal:''
    })
  }
  handleDelete(index){
    let {lists} = this.state
    lists.splice(index,1);
    console.log(index)
    this.setState({
      lists
    })
  }
}
