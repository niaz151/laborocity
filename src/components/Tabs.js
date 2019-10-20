import React from 'react';
import '../styles/Tabs.css';

class Tabs extends React.Component{

  render(){
    return(
      <div className='d-flex align-items-center justify-content-center tab-container'>
        <div className='d-flex align-items-center justify-content-center tab'> Skills </div>
        <div className='d-flex align-items-center justify-content-center tab'> Equipment </div>
        <div className='d-flex align-items-center justify-content-center tab'> Certification </div>
      </div>
    )
  }
}

export default Tabs;