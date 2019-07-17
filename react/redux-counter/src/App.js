import React,{ Component } from 'react';
import { connect } from 'react-redux'
import './App.css';


class Count extends Component {
  state = {  }
  handleIncrement = ()=>{
    // store.dispatch({type:'INCREMENT'})
    this.props.increment()
  }
  handleDecrement = ()=>{
    // store.dispatch({type:'DECREMENT'})
    this.props.decrement()
  }
  handleaddfilm = ()=>{
    // store.dispatch({
    //   type:'ADD_FILM',
    //   film:{name:'扫毒2'}
    // })
    this.props.addFilm()
  }
  render() { 
    console.log(this.props)
    const {count,films} = this.props
    return ( 
      <div>
        Count:{count};
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleaddfilm}>添加电影</button>
        {
          films.map((film,i)=>{
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
     );
  }
}
const mapStateToProps = (state)=>{
  return {
    count:state.count,
    films:state.films
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    // foo:()=>{console.log('foo')},
    increment:()=>{dispatch({type:'INCREMENT'})},
    decrement:()=>{dispatch({type:'DECREMENT'})},
    addFilm:()=>{dispatch({type:'ADD_FILM',film:{name:'扫毒2'}})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Count);
