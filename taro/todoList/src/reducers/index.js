import { combineReducers } from "redux";
// reduce 将很多的状态,reduce 最终状态

const INITTAL_STATE = {
  todos:[
    {
      id:0,
      text:'第一条todo'
    }
  ]
}

function todos(){
  return INITTAL_STATE
}

export default combineReducers({
  todos
})