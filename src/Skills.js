import React from 'react';
import Header from './components/Header';
import NavTabs from './components/NavTabs';
import Hero from './components/Hero';
import CategoryForm from './components/CategoryForm';

const Skills = () => {
  return(
    <>
      <Header/>
      <NavTabs/>
      <div className='d-flex flex-column align-items-center skills-background'>
        <Hero/>
        <CategoryForm/>
      </div>
    </>
  )
}

export default Skills;