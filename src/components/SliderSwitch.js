import React,{Fragment} from 'react';
import Slider from './Slider';

class SliderSwitch extends React.Component{

  render(){
    return(
      <div className='mr-4 d-flex flex-row position-absolute slider-switch-wrap'>
        <div className='d-flex flex-row align-items-center justify-content-center slider-switch'>
          <div className='slider-switch-mark'></div>
          <div className='slider-switch-mark'></div>
          <div className='slider-switch-mark'></div>
        </div>
        <div className='d-flex align-items-center justify-content-center slider-switch-text'>
          No
        </div>
      </div>
    )
  }
}

export default SliderSwitch;