import React from 'react';
import './styles/Header.css';


const Header = () => {
  return(
    <div className='container-fluid position-relative d-flex align-items-center w-100 header'>
      <img className='pl-3 position-absolute company-icon' src={require('./images/logo.svg')} alt="" />
      <img className='pr-3 position-absolute menu-icon' src={require('./images/menu.svg')} alt="" />
    </div>
  )
}

export default Header;