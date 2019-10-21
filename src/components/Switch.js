import React,{Fragment} from 'react';
import '../styles/Switch.css';

const Switch = () => (
  <label class='switch mr-4'>
    <input type='checkbox' />
    <span className='slider'></span>
  </label>
)

export default Switch;