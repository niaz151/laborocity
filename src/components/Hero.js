import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return(
    <div className='d-flex flex-column align-items-center justify-content-center hero-container'>
      <img className='person-icon' src={require('../images/person.svg')} alt="" />
      <div className='d-flex align-items-center justify-content-center mt-4 hero-text-container'>
        Here you can select your <br/> interests and experiences
      </div>
    </div>
  )
}

export default Hero;