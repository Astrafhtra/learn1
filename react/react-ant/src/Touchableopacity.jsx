import React, { Component } from 'react';
import './btn.css'

class Touchable extends Component {
  state = { 
    active:false
   }
  TouchStart = ()=>{
    this.setState({
      active:true
    })
  }
  TouchEnd= ()=>{
    this.setState({
      active:false
    })
  }
  render() { 
    const {active} = this.state
    const styleObj = {
      opacity:active?0.3:1
    }
    return ( 
      <div className='btn' onTouchStart={this.TouchStart} onTouchEnd={this.TouchEnd} style={styleObj}>
        {this.props.children}
      </div>
     );
  }
}
 
export default Touchable;