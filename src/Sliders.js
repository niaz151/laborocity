import React from 'react';
import './styles/Sliders.css';
import Slider from './components/Slider';

const Sliders = () => {
  return(
    <div className='d-flex  flex-column align-items-center justify-content-around slider-container'>
      <Slider name="Warehouse"/>
      <Slider name="Hospitality"/>
      <Slider name="General Labor"/>
      <Slider name="Office"/>
      <Slider name="iRelaunch"/>
    </div>
  )
}

export default Sliders;