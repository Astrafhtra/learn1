import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// hashRouter # hashChange
// historyRouter  不带# BrowserRouter 实现方式是通过H5d的History api
// 刷新这个行为
import Layout from './page/layout';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
   <Router>
     <Route path="/" component={Layout} />
   </Router>
  );
}

export default App;
