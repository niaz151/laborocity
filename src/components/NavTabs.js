import React from 'react';
import '../styles/Tabs.css';
import Tab from './Tab';

const NavTabs = () => {
  return(
    <div className='d-flex align-items-center justify-content-center tab-container'>
      <Tab name='Skills'/>
      <Tab name='Equipment' />
      <Tab name='Certification' />
    </div>
  )
}

export default NavTabs;