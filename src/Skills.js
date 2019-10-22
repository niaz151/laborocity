import React from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Hero from './components/Hero';
import CategoryForm from './components/CategoryForm';

const Skills = () => {
  return(
    <>
      <Header/>
      <Tabs/>
      <div className='d-flex flex-column align-items-center skills-background'>
        <Hero/>
        <CategoryForm/>
      </div>
    </>
  )
}

export default Skills;