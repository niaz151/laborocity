import React from 'react';
import '../styles/Header.css';


const Header = () => {
  return(
    <div className='container-fluid position-relative d-flex align-items-center w-100 header'>
      <img className='pl-3 position-absolute company-icon' src={require('../images/logo.svg')} />
      <img className='pr-3 position-absolute menu-icon' src={require('../images/menu.svg')} />
    </div>
  )
}

export default Header;