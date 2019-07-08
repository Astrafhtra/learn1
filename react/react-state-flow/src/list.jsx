import React, { Component } from 'react'

class list extends Component {
  handledelete=(e)=>{
    const {onDelete} = this.props;
    const id = parseInt(e.target.dataset.id);
    console.log(id)
    onDelete(id);
  }
  render() {
    const {list} = this.props;
    return (
      <>
      <li>
        name: {list.name},
        age: {list.age},
        school: {list.school},
      </li>
      <button onClick={this.handledelete} data-id={list.id}>delete</button>
      </>
    )
  }
}

export default list