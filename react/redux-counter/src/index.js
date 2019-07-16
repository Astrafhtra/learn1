import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore,combineReducers} from 'redux'


class Count extends Component {
  state = {  }
  handleIncrement = ()=>{
    store.dispatch({type:'INCREMENT'})
  }
  handleDecrement = ()=>{
    store.dispatch({type:'DECREMENT'})
  }
  handleaddfilm = ()=>{
    store.dispatch({
      type:'ADD_FILM',
      film:{name:'扫毒2'}
    })
  }
  render() { 
    return ( 
      <div>
        Count:{store.getState().count};
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleaddfilm}>添加电影</button>
        {
          store.getState().films.map((film,i)=>{
            return (
              <li key={i}>{film.name}</li>
            )
          })
        }
      </div>
     );
  }
}
function reducer(state, action) {
  console.log('reducer->>>>', action);
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return 0;
  }
}
function filmReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state, action.film];
    default :
      return state;
  }
}
const index = combineReducers({
  count: reducer,
  films: filmReducer
})
const store = createStore(index);
ReactDOM.render(<Count />, document.getElementById('root'));
// subscribe 这个函数是用来去订阅 store 的变化
store.subscribe(()=>{
  ReactDOM.render(<Count />, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
