import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import index from './reducer/index'
import Count from './App'
import { Provider } from 'react-redux'

const store = createStore(index);

ReactDOM.render(
  <Provider store={store}>,
<Count />
  </Provider>,
  document.getElementById('root'));


export default store
// subscribe 这个函数是用来去订阅 store 的变化
// store.subscribe(()=>{
//   ReactDOM.render(<Count />, document.getElementById('root'));
// })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
