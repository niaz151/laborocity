import React from 'react';
import SliderSwitch from './SliderSwitch';

class Slider extends React.Component{

  render(){
    return(
      <div className='position-relative d-flex align-items-center slider'>
        <div className='ml-4 position-absolute slider-name'>
          {this.props.name}
        </div>
        <SliderSwitch />
      </div>
    )
  }
}

export default Slider; 