import React, { Component } from 'react';

/**
 * 第一次挂载
 * 更新
 *  */

class Index extends Component {
  state = {
    count:0,
  }
  handleCountAdd = ()=>{
    let { count } = this.state.count
    count++;
    this.setState({
      count
    })
  }
  // 将要挂载
  componentWillMount(){
    console.log('componentWillMount')
  }
  // 已经挂载
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentWillReceiveProps(preProps,nextProps){
    console.log('componentWillReceiveProps')
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }
  render() {
    const { parentCount } = this.props
    return (
      <div>
        parentCount:{parentCount}
        <button onClick={this.handleCountAdd}>+</button>
      </div>);
  }
}

export default Index;