import React from 'react';
import '../styles/Tabs.css';
import NavTab from './NavTab';

const Tabs = () => {
  return(
    <div className='d-flex align-items-center justify-content-center tab-container'>
      <NavTab name='Skills'/>
      <NavTab name='Equipment' />
      <NavTab name='Certification' />
    </div>
  )
}

export default Tabs;