import React, { Component } from 'react';
import propTypes from 'prop-types';

class Context15 extends Component {
  // static
  state = {
    theme: 'red'
  }
  //  后代组件从这里取信息
  getChildContext() {
    return {
      theme: this.state.theme
    }
  }
  //1
  // handleToggleTheme = (e)=>{
  //   const theme = e.target.dataset.theme;
  //   this.setState({
  //     theme
  //   })
  // }

  // 2
  // handleToggleTheme = (theme)=>()=>{
  //   this.setState({
  //     theme
  //   })
  // }

  // 3
  handleToggleTheme = (theme) => {
    this.setState({
      theme
    })
  }
  render() {
    const msg = ['str1', 'str2', 'str3'];
    return (
      <div>
        {
          msg.map((item, i) => {
            return (
              <Message key={i} text={item} />
            )
          })
        }
        {/* 1 */}
        {/* <button onClick={this.handleToggleTheme} data-theme="purple">purple</button> */}
        <button onClick={()=>this.handleToggleTheme('purple')} data-theme="purple">purple</button>
        <button onClick={()=>this.handleToggleTheme('yellowgreen')} data-theme="yellowgreen">yellowgreen</button>
        {/* 2 <button onClick={this.handleToggleTheme('purple')} data-theme="purple">purple</button>*/}
      </div>
    );
  }
}
/**
 * function Person(){}
 * Person.ChildContextType
 */
Context15.childContextTypes = {
  theme: propTypes.string
}
class Message extends Component {
  shouldComponentUpdate(){
    return false;
  }
  state = {}
  render() {
    const { text } = this.props
    return (
      <li>
        {text}
        <MyButton />
      </li>
    )
  }
}
class MyButton extends Component {
  static contextTypes = {
    theme: propTypes.string
  }
  state = {}
  render() {
    const { theme } = this.context;
    return (
      <button style={{ color: theme }}>delete</button>
    );
  }
}


export default Context15;