import * as React from 'react';//MVVM
import * as ReactDOM from 'react-dom'; //render
// import {HelloComponent} from './hello1'
import { Header ,About } from './components';

// console.log(HelloComponent, '----------------');
ReactDOM.render(
  <div className="container-fluid">
    <Header />
    <About />
  </div>,
  // <HelloComponent />,
  document.getElementById('root')
);
// 根组件的
