import React from 'react';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import LaborSkillsForm from './components/LaborSkillsForm';

const Certifications = () => {
  return(
    <>
      <Header />
      <NavTabs active='certifications' />
      <div className='d-flex flex-column align-items-center certifications-background'> 
        <LaborSkillsForm/>
      </div>
    </>
  )
}

export default Certifications;