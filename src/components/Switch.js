import React from 'react';
import '../styles/Switch.css';

class Switch extends React.Component {
  render(){

    const {input: {value,onChange}} = this.props
 
    return(
      <label className='switch mr-4'>
        {/* NEGATE(SWITCH) FORM VALUE WITH ! */}
        <input type='checkbox' value={this.props.value} onClick={ () => onChange(!value)} />
        <span className='slider'></span>
      </label>
    )
  }
}

export default Switch;