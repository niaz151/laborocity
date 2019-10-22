import React from 'react';
import Header from './components/Header';
import NavTabs from './components/NavTabs';

const Certifications = () => {
  return(
    <>
      <Header />
      <NavTabs active='certifications' />
      <div className='d-flex flex-column align-items-center certifications-background'>
      
      </div>
    </>
  )
}

export default Certifications;