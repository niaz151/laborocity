import React from 'react';
import '../styles/Tabs.css';
import Tab from './Tab';

class NavTabs extends React.Component{

  render(){
    switch(this.props.active){

      case 'skills':
        return(
          <div className='d-flex flex-row align-items-center justify-content-center tab-container'>
            <Tab name='Skills' active={true} />
            <Tab name='Equipment' />
            <Tab name='Certifications' />
          </div>
        )

      case 'equipment':
        return(
          <div className='d-flex flex-row align-items-center justify-content-center tab-container'>
            <Tab name='Skills'/>
            <Tab name='Equipment' active={true} />
            <Tab name='Certifications' />
          </div>
        )

      case 'certifications':
        return(
          <div className='d-flex flex-row align-items-center justify-content-center tab-container'>
            <Tab name='Skills'/>
            <Tab name='Equipment' />
            <Tab name='Certifications' active={true} />
          </div>
        )
    }
  }
}


export default NavTabs;