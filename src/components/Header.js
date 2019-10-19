import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return(
    <div className='container-fluid position-absolute d-flex align-items-center pl-4 w-100 header'>
      <img src={require('../images/logo.svg')} />
    </div>
  )
}

export default Header;