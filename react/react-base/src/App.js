import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo1 from './Demo1';
import Demo2 from './Demo2'

function renderStr(){
  return 'string'
}
function App() {
  const age = 23;
  const styObj = {color:'blue'};
  const foo =()=>{console.log('red')};
  const bar = ()=>{
    return function(){
      console.log('blue')
    }
  }
  const lis =[
    <li>1</li>,
    <li>2</li>
  ]
  const names = ['name1','name2','name3']
  const namesNodes = names.map((name,index)=>{
    return (<div style = {styObj}>{name}</div>)
  })
  return (
    <div>
      <Demo1 names={names} from="App" onClick={(a)=>{
        console.log(a)
      }} />
      <Demo2 names={names} from="App" />
      <p style={{color:'red'}} onClick={()=>{
        console.log('red')
      }}>{age}</p>
      <p style = {styObj}>{age}</p>
      <p style = {styObj} onClick={foo}>{age}</p>
      <p style = {styObj} onClick={bar()}>{age}</p>
      {/* 可以直接展开数组 */}
      {lis}
      {
        names.map((name,index)=>{
          return (<div>{name}</div>)
        })
      }
      {namesNodes}
      {renderStr()}
      {true?<div style = {styObj}>登录</div>:<a href="#">登录</a>}
    </div>
  );
}

export default App;
