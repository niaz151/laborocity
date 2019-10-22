import React from 'react';
import '../styles/Switch.css';



class Switch extends React.Component{
  render(){
    return(
      <label className='switch mr-4'>
        <input type='checkbox' />
        <span className='slider'></span>
      </label>
    )
  }
}

export default Switch;