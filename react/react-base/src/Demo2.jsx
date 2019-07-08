import React from 'react';

function Demo2(props){
  const {names,from} = props
  return(
    <p style={{backgroundColor:'red'}}>{names} {from}</p>
  )
}
export default Demo2